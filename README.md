# loggers_learning-

## Tips for Clean and Efficent Logging

![alt text](./readmeImages/image-2.png)
![alt text](./readmeImages/image-1.png)
![alt text](./readmeImages/image-3.png)
![alt text](./readmeImages/image-4.png)
![alt text](./readmeImages/image-5.png)
![alt text](./readmeImages/image-6.png)
![alt text](./readmeImages/image-7.png)

## Ease of knowing

![alt text](./readmeImages/image-8.png)

## Structure logging

![alt text](./readmeImages/image-9.png)
![alt text](./readmeImages/image-10.png)

## Example of things to add in an log

![alt text](./readmeImages/image-11.png)
![alt text](./readmeImages/image-12.png)

## List of this to capture in every Log Entree

![alt text](./readmeImages/image-13.png)

## Loggers are BlackBox Recoder of our system

- so just don't add what happend instead add what cause it or led it to it
- make it detaild enough to actually know what happend

## How to cut on space

### Sampleing

- Instead of saving every single logs we save a representative sample
- for example our auth logs everytime a user logs in, and with sampleing with 20% sampling rate we can just store 2 out of 10 logs
- may be keep all of your error logs and sample the success logs
- if having high trafic at specific end point sample more over there
  ![alt text](./readmeImages/image-14.png)

## Cononical log lines

![alt text](./readmeImages/image-15.png)

- instead
- cononical think of it as a movie summary instead of watching all the scence seprately
- for eaxmple, at the end of every requiest we can create one log entre that captures everything important, what the user tried to do, who they were, how long it took, what went wrong and eveen how much time we spend in the database
- instead of schrolling through hundrads of logs we get everything in one place

## Retention

- meaning how long to store the logs for
  ![alt text](./readmeImages/image-16.png)

## Securing logs

- our log may contain sensitive information such as
  ![alt text](./readmeImages/image-17.png)
- we can do so in 3 ways
  ![alt text](./readmeImages/image-18.png)

## what should not be in logs in the 1st place

what we don't what to log
![alt text](./readmeImages/image-19.png)
instead
![alt text](./readmeImages/image-20.png)

- we can use packages like "go slog"
  ![alt text](./readmeImages/image-21.png)
  ![alt text](./readmeImages/image-22.png)
- even if someone accedently logs the entire user object this only shows the userId
  ![alt text](./readmeImages/image-23.png)
  for extra protection setup filters in your logging pipeline to catch and redact anything
  ![alt text](./readmeImages/image-24.png)
