import amqp from 'amqplib';
let connection=null;
let channel=null; 
const EXCHANGE_NAME = "GeneratingPromptsAndScriptsExchange";
export async function connectToRabbitMQ() {
    try{
        const amqpServerUrl=process.env.RABBITMQ_URL || 'amqp://localhost:5672';
        connection=await amqp.connect(amqpServerUrl);
        channel=await connection.createChannel();

        await channel.assertExchange(EXCHANGE_NAME, 'topic', { durable: true });
        console.log('Connected to RabbitMQ');
        return channel;}
        catch (E){
            console.error('Failed to connect to RabbitMQ:', E);
            throw E;
        }
    }
export async function publishToQueue(routingKey, message) {
    try{
        if (!channel) {
            await connectToRabbitMQ();
        }
        await channel.publish(
            EXCHANGE_NAME,
            routingKey,
            Buffer.from(JSON.stringify(message))
        )
        console.log(`Message published to queue ${routingKey}: ${message}`);
    } catch (E) {
        console.error('Failed to publish message to RabbitMQ:', E);
        throw E;
    }
}
export async function consumeFromQueue(routingKey, callback) {
    try{
        if (!channel) {
            await connectToRabbitMQ();
        }
        const q =await channel.assertQueue("", { durable: true });
        await channel.bindQueue(q.queue, EXCHANGE_NAME, routingKey);
        channel.consume(q.queue, (msg) => {
            if (msg !== null) {
                const messageContent = JSON.parse(msg.content.toString());
                console.log(`Message received from queue ${q.queue}: ${messageContent}`);
                callback(messageContent);
                channel.ack(msg);
            }
        });
    } catch (E) {
        console.error('Failed to consume message from RabbitMQ:', E);
        throw E;
    }
}