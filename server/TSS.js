/*Need queues of updates popping state commands and
excecuting at different time delays. Leading queue will add remote
 updates at time recieved. Trailing queues will add remote updates
 at executed time for the sender's state. Updates will be ignored
 if time exceeds the window for the entire synch algo.

timeWindowLower = getTime() - 15sec
timewindowhigher = getTime()

if messageTime is not between Lower and Higher{
    nah
} else {
    add message to all queues 
        -insert into leading queue at arrival time
        -insert into leading queue at time passed (timestamp from sender)
    execute commands based on current time VS. synch delay
    -local will be easy
    -remote commands will always trigger state inconsistency
    -compare trailing states with leading states
}
*/
