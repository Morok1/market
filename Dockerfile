FROM openjdk:8

EXPOSE 8080

ADD ./target/market-0.0.1-SNAPSHOT.jar market-0.0.1-SNAPSHOT.jar

ENTRYPOINT ["java","-jar","/market-0.0.1-SNAPSHOT.jar"]