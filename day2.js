/*Given a question topic, complete a function interviewAnswer(topic) that returns your 
stance on that particular election issue. The answer should be returned as a string.

When asked about arts funding, the function should return "We'll have to get creative!"
When asked about the economy, the function should return "Time is money."
When asked about transportation, the function should return "It's going to be a long road, 
so we better get moving."
If you're asked about a topic that isn't in the list above, respond with a default statement. 
(For example, "QUACK!") */

const interviewAnswer = (topic) => {
    // Code here!
    if (topic == 'arts funding') {
        return ("We'll have to get creative!")
    } else if (topic == 'economy') {
        return ("Time is money.")
    } else if (topic == 'transportation') {
        return ("It's going to be a long road, so we better get moving.")
    } else {
        return ('"QUACK!"')
    }
    // Remember to return a value!
}
const topic = 'transportation';
interviewAnswer(topic);