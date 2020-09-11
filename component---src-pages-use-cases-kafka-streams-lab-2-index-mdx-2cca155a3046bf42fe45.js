(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{McqA:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return o})),t.d(a,"default",(function(){return g}));var n=t("wx14"),r=t("zLVn"),i=(t("q1tI"),t("7ljp")),s=t("013z"),o=(t("qKvR"),{}),l=function(e){return function(a){return console.warn("Component '"+e+"' was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",a)}},c=l("AnchorLinks"),p=l("AnchorLink"),m={_frontmatter:o},u=s.a;function g(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)(u,Object(n.a)({},m,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)(c,{mdxType:"AnchorLinks"},Object(i.b)(p,{mdxType:"AnchorLink"},"Scenario Prerequisites"),Object(i.b)(p,{mdxType:"AnchorLink"},"Adding in more Kafka Streams operators"),Object(i.b)(p,{mdxType:"AnchorLink"},"Producing to and Consuming from a Kafka Topic on Event Streams")),Object(i.b)("h2",null,"Scenario Prerequisites"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Java")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"For the purposes of this lab we suggest Java 8+")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Maven")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Maven will be needed for bootstrapping our application from the command-line and running\nour application.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"An IDE of your choice")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Ideally an IDE that supports Quarkus (such as Visual Studio Code)")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"OpenShift Container Platform, IBM Cloud Pak for Integration and IBM Event Streams")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"This is an optional portion of the lab for those who have access to an OCP Cluster, IBM Cloud Pak for Integration\nas well as IBM Event Streams installed on top of the Cloud Pak.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"The following are optional"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"OpenShift Container Platform")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"v4.4.x"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"IBM Cloud Pak for Integration")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"CP4I2020.2"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"IBM Event Streams")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The section on use with Event Streams on CP4I assumes Event Streams v10. IF using a previous version such as ESv2019.4.2\nthere are some differences to how you would configure ",Object(i.b)("inlineCode",{parentName:"li"},"application.properties")," to establish a connectio")))),Object(i.b)("h2",null,"Adding in more Kafka Streams operators"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Cool. Let’s now create a test to test two different operators, ",Object(i.b)("inlineCode",{parentName:"li"},"filter")," and ",Object(i.b)("inlineCode",{parentName:"li"},"map"),". Let’s add the following declarations.")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'private static String tradingTable = "tradingTable";\nprivate static String tradingStoreName = "tradingStore";\nprivate static TestInputTopic<String, String> tradingTableTopic;\n')),Object(i.b)("p",null,"Inside the ",Object(i.b)("inlineCode",{parentName:"p"},"buildTopology()")," function."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"KeyValueBytesStoreSupplier tradingStoreSupplier = Stores.persistentKeyValueStore(tradingStoreName);\n\nKTable<String, String> stockTradingStore = builder.table(tradingTable,\n            Consumed.with(Serdes.String(), Serdes.String()),\n            Materialized.as(tradingStoreSupplier));\n")),Object(i.b)("p",null,"And let’s edit the ",Object(i.b)("inlineCode",{parentName:"p"},"branch[1]")," logic again to create new ",Object(i.b)("inlineCode",{parentName:"p"},"KeyValue")," pairs of ",Object(i.b)("inlineCode",{parentName:"p"},"userId")," and ",Object(i.b)("inlineCode",{parentName:"p"},"stockSymbol")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Note")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Like in Lab 1, since we’re changing ",Object(i.b)("inlineCode",{parentName:"li"},"branches[1]")," logic you will need to comment out the ",Object(i.b)("inlineCode",{parentName:"li"},"@Test")," annotation for ",Object(i.b)("inlineCode",{parentName:"li"},"filteredStreamHasTwoRecords()"),"\ntest function or there will be exceptions thrown.")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"branches[1].filter(\n            (key, value) -> (value.totalCost > 5000)\n        )\n        .map(\n            (key, value) -> KeyValue.pair(value.userId, value.stockSymbol)\n        )\n        .to(\n            tradingTable,\n            Produced.with(Serdes.String(), Serdes.String())\n        );\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"You may notice something different here. Previously we wrote straight to ",Object(i.b)("inlineCode",{parentName:"li"},"outTopic"),", however now we’re writing to\na KTable so that we can query the State Store with our test. So let’s create a new test like below -")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'    @Test\n    public void filterAndMapNewPair() {\n\n        FinancialMessage mock = new FinancialMessage(\n            "1", "MET", "SWISS", 12, 1822.38, 21868.55, 94, 7, true\n        );\n        inTopic.pipeInput("1", mock);\n\n        KeyValueStore<String,ValueAndTimestamp<String>> tableStore = testDriver.getTimestampedKeyValueStore(tradingStoreName);\n        Assertions.assertEquals(1, tableStore.approximateNumEntries());\n        Assertions.assertEquals("MET", tableStore.get("1").value());\n        //System.out.println(tableStore.get("1").value());\n    }\n')),Object(i.b)("p",null,"The first assertion checks whether the store has a record and the second assertion checks that the mock record that we\ninserted has the correct value as our map function created new KeyValue pairs of of ",Object(i.b)("inlineCode",{parentName:"p"},"<userId, stockSymbol>"),"."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"It’s now time to move to something a little bit more advanced. We’re not going to join a KStream with a KTable. The Streams API\nhas an inner join, left join, and an outer join. We’ll mention this later but KStream-KTable joins are Non-Windowed and asymmetric.\nBy asymmetric we mean that a join only gets triggered if the left input stream gets a new record while the right (our KTable) is only\nused to hold our input records and only used to update a materialized table.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Let’s instantiate a few more variables."))),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'    private static String joinedTopicName = "joinedTopic";\n    private static TestOutputTopic<String, String> joinedTopic;\n    private static String joinedStoreName = "joinedStore";\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"And let’s create a new KTable to persist the new joined records so that we can query it.")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"KTable<String, String> joinedMessageStore = builder.table(joinedTopicName,\n            Consumed.with(Serdes.String(), Serdes.String()),\n            Materialized.as(joinedStoreSupplier));\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Comment out the previous branch logic or remove them. Our ",Object(i.b)("inlineCode",{parentName:"li"},"buildTopology()")," function should look like the below -")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'public static void buildTopology() {\n        final StreamsBuilder builder = new StreamsBuilder();\n        KeyValueBytesStoreSupplier storeSupplier = Stores.persistentKeyValueStore(storeName);\n        KeyValueBytesStoreSupplier tradingStoreSupplier = Stores.persistentKeyValueStore(tradingStoreName);\n        KeyValueBytesStoreSupplier joinedStoreSupplier = Stores.persistentKeyValueStore(joinedStoreName);\n\n        KStream<String, FinancialMessage> transactionStream =\n            builder.stream(\n                inTopicName,\n                Consumed.with(Serdes.String(), financialMessageSerde)\n            );\n\n        KTable<String, String> stockTradingStore = builder.table(tradingTable,\n            Consumed.with(Serdes.String(), Serdes.String()),\n            Materialized.as(tradingStoreSupplier));\n\n        KTable<String, String> joinedMessageStore = builder.table(joinedTopicName,\n            Consumed.with(Serdes.String(), Serdes.String()),\n            Materialized.as(joinedStoreSupplier));\n\n        KStream<String, String> joinedStream = transactionStream.join(\n            stockTradingStore,\n            (financialMessage, companyName) -> "userId = " + financialMessage.userId + " companyName = " + companyName);\n\n        joinedStream.to(\n            joinedTopicName,\n            Produced.with(Serdes.String(), Serdes.String()));\n\n        testDriver = new TopologyTestDriver(builder.build(), getStreamsConfig());\n        inTopic = testDriver.createInputTopic(inTopicName, new StringSerializer(), new JsonbSerializer<FinancialMessage>());\n        tradingTableTopic = testDriver.createInputTopic(tradingTable, new StringSerializer(), new StringSerializer());\n        joinedTopic = testDriver.createOutputTopic(joinedTopicName, new StringDeserializer(), new StringDeserializer());\n    }\n\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A closer examination shows us the following")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'        KTable<String, String> joinedMessageStore = builder.table(joinedTopicName,\n            Consumed.with(Serdes.String(), Serdes.String()),\n            Materialized.as(joinedStoreSupplier));\n\n        KStream<String, String> joinedStream = transactionStream.join(\n            stockTradingStore,\n            (financialMessage, companyName) -> "userId = " + financialMessage.userId + " companyName = " + companyName);\n\n        joinedStream.to(\n            joinedTopicName,\n            Produced.with(Serdes.String(), Serdes.String()));\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"A new KStream named ",Object(i.b)("inlineCode",{parentName:"p"},"joinedStream")," is created that is the result of an ",Object(i.b)("inlineCode",{parentName:"p"},"inner join")," between the left ",Object(i.b)("inlineCode",{parentName:"p"},"transactionStream")," and\nthe right table ",Object(i.b)("inlineCode",{parentName:"p"},"stockTradingStore"),". A join is performed on matching keys between the Stream and the Table and matched records\nproduced a new ",Object(i.b)("inlineCode",{parentName:"p"},"<String, String>")," pair with the value of ",Object(i.b)("inlineCode",{parentName:"p"},'"userId = " + financialMessage.userId + " companyName = " + companyName'),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Let’s implement a simple test to make sure that our inner join works."))),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'    @Test\n    public void checkStreamAndTableJoinHasOneRecord() {\n\n        tradingTableTopic.pipeInput("2", "Metropolitan Museum of Art");\n\n        FinancialMessage mock = new FinancialMessage(\n            "1", "MET", "SWISS", 12, 1822.38, 21868.55, 94, 7, true\n        );\n        inTopic.pipeInput("1", mock);\n\n        KeyValueStore<String,ValueAndTimestamp<String>> joinedTableStore = testDriver.getTimestampedKeyValueStore(joinedStoreName);\n        Assertions.assertEquals(1, joinedTableStore.approximateNumEntries());\n        System.out.println(joinedTableStore.get("1").value());\n    }\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Our KTable gets one record ",Object(i.b)("inlineCode",{parentName:"li"},'("1", "Metropolitan Museum of Art")'),", and our Stream gets our mock message. The ",Object(i.b)("inlineCode",{parentName:"li"},"inTopic"),"\nhere is the left side of the inner join so a join gets triggered. The ",Object(i.b)("inlineCode",{parentName:"li"},"joinedTableStore")," has the results of the ",Object(i.b)("inlineCode",{parentName:"li"},"joinedTopic"),"\nso that we can query it. However, this test fails. Why? The reaosn is due to the fact that our ",Object(i.b)("inlineCode",{parentName:"li"},"tradingTableTopic")," has a record with\na key of ",Object(i.b)("inlineCode",{parentName:"li"},'"2"')," and our message has a key of ",Object(i.b)("inlineCode",{parentName:"li"},'"1"')," so there are no matching records. To make the test pass, change the 2 to a 1.")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Time to create a new Test class to not try to confuse ourselves too much. But first let’s create two new POJO classes\nand name them ",Object(i.b)("inlineCode",{parentName:"li"},"EnrichedMessage.java")," and ",Object(i.b)("inlineCode",{parentName:"li"},"AggregatedMessage.java"),".")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"EnrichedMessage")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"package com.ibm.garage.cpat.Domain;\n\n\npublic class EnrichedMessage {\n\n    public String userId;\n    public String stockSymbol;\n    public int quantity;\n    public double stockPrice;\n    public double totalCost;\n    public double adjustedCost;\n    public boolean technicalValidation;\n    public String companyName;\n\n    public EnrichedMessage (FinancialMessage message, String companyName) {\n        this.userId = message.userId;\n        this.stockSymbol = message.stockSymbol;\n        this.quantity = message.quantity;\n        this.stockPrice = message.stockPrice;\n        this.totalCost = message.totalCost;\n        this.companyName = companyName;\n\n        if (message.technicalValidation)\n        {\n            this.technicalValidation = message.technicalValidation;\n            this.adjustedCost = message.totalCost * 1.15;\n        }\n\n        else {\n            this.technicalValidation = message.technicalValidation;\n            this.adjustedCost = message.totalCost;\n        }\n    }\n}\n")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"AggregatedMessage")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"package com.ibm.garage.cpat.Domain;\n\nimport java.math.BigDecimal;\nimport java.math.RoundingMode;\n\n\npublic class AggregatedMessage {\n\n    public String userId;\n    public String stockSymbol;\n    public int quantity;\n    public double stockPrice;\n    public double totalCost;\n    public double adjustedCost;\n    public boolean technicalValidation;\n    public String companyName;\n    public int count;\n    public double sum;\n    public double average;\n\n    public AggregatedMessage updateFrom(EnrichedMessage message) {\n        this.userId = message.userId;\n        this.stockSymbol = message.stockSymbol;\n        this.quantity = message.quantity;\n        this.stockPrice = message.stockPrice;\n        this.totalCost = message.totalCost;\n        this.companyName = message.companyName;\n        this.adjustedCost = message.adjustedCost;\n        this.technicalValidation = message.technicalValidation;\n\n        this.count ++;\n        this.sum += message.adjustedCost;\n        this.average = BigDecimal.valueOf(sum / count)\n                    .setScale(1, RoundingMode.HALF_UP).doubleValue();\n\n        return this;\n    }\n}\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Lastly let’s create that new Test class named ",Object(i.b)("inlineCode",{parentName:"li"},"TestAggregate.java")," and paste the following")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'package com.ibm.garage.cpat.lab;\n\nimport java.util.Properties;\n\nimport org.apache.kafka.common.serialization.LongDeserializer;\nimport org.apache.kafka.common.serialization.Serde;\nimport org.apache.kafka.common.serialization.Serdes;\nimport org.apache.kafka.common.serialization.StringDeserializer;\nimport org.apache.kafka.common.serialization.StringSerializer;\nimport org.apache.kafka.streams.KeyValue;\nimport org.apache.kafka.streams.StreamsBuilder;\nimport org.apache.kafka.streams.StreamsConfig;\nimport org.apache.kafka.streams.TestInputTopic;\nimport org.apache.kafka.streams.TestOutputTopic;\nimport org.apache.kafka.streams.TopologyTestDriver;\nimport org.apache.kafka.streams.kstream.Consumed;\nimport org.apache.kafka.streams.kstream.KGroupedStream;\nimport org.apache.kafka.streams.kstream.KStream;\nimport org.apache.kafka.streams.kstream.KTable;\nimport org.apache.kafka.streams.kstream.Materialized;\nimport org.apache.kafka.streams.kstream.Produced;\nimport org.apache.kafka.streams.kstream.Windowed;\nimport org.apache.kafka.streams.kstream.WindowedSerdes;\nimport org.apache.kafka.streams.processor.StateStore;\nimport org.apache.kafka.streams.state.KeyValueBytesStoreSupplier;\nimport org.apache.kafka.streams.state.KeyValueIterator;\nimport org.apache.kafka.streams.state.KeyValueStore;\nimport org.apache.kafka.streams.state.Stores;\nimport org.apache.kafka.streams.state.ValueAndTimestamp;\nimport org.junit.jupiter.api.AfterAll;\nimport org.junit.jupiter.api.Assertions;\nimport org.junit.jupiter.api.BeforeAll;\nimport org.junit.jupiter.api.Test;\n\nimport io.quarkus.kafka.client.serialization.JsonbDeserializer;\nimport io.quarkus.kafka.client.serialization.JsonbSerde;\nimport io.quarkus.kafka.client.serialization.JsonbSerializer;\nimport io.quarkus.test.junit.QuarkusTest;\n\nimport com.ibm.garage.cpat.FinancialMessage.*;\nimport com.ibm.garage.cpat.AggregatedMessage.AggregatedMessage;\nimport com.ibm.garage.cpat.EnrichedMessage.*;\n\n\n@QuarkusTest\npublic class TestAggregate {\n\n    private static TopologyTestDriver testDriver;\n    private static String inTopicName = "financialMessages";\n    private static String outTopicName = "enrichedMessages";\n    private static String storeName = "financialStore";\n    private static String aggregatedTopicName = "aggregatedMessages";\n\n    private static String companyTable = "companyTable";\n    private static String companyStoreName = "companyStore";\n\n    private static TestInputTopic<String, FinancialMessage> inTopic;\n    private static TestOutputTopic<String, EnrichedMessage> outTopic;\n    private static TestOutputTopic<String, AggregatedMessage> aggregatedTopic;\n    private static TestInputTopic<String, String> companyTableTopic;\n\n    private static final JsonbSerde<FinancialMessage> financialMessageSerde = new JsonbSerde<>(FinancialMessage.class);\n    private static final JsonbSerde<EnrichedMessage> enrichedMessageSerde = new JsonbSerde<>(EnrichedMessage.class);\n    private static final JsonbSerde<AggregatedMessage> aggregatedMessageSerde = new JsonbSerde<>(AggregatedMessage.class);\n    private static final JsonbDeserializer<EnrichedMessageDeserializer> enrichedMessageDeserializer = new JsonbDeserializer<>(EnrichedMessageDeserializer.class);\n\n\n    public static Properties getStreamsConfig() {\n        final Properties props = new Properties();\n        props.put(StreamsConfig.APPLICATION_ID_CONFIG, "kstream-lab3");\n        props.put(StreamsConfig.BOOTSTRAP_SERVERS_CONFIG, "dummmy:3456");\n        props.put(StreamsConfig.DEFAULT_KEY_SERDE_CLASS_CONFIG, Serdes.String().getClass());\n        //props.put(StreamsConfig.DEFAULT_VALUE_SERDE_CLASS_CONFIG, financialMessageSerde);\n        return props;\n    }\n\n    @BeforeAll\n    public static void buildTopology() {\n        final StreamsBuilder builder = new StreamsBuilder();\n        KeyValueBytesStoreSupplier storeSupplier = Stores.persistentKeyValueStore(storeName);\n        KeyValueBytesStoreSupplier companyStoreSupplier = Stores.persistentKeyValueStore(companyStoreName);\n\n        // create a KStream for financial messages.\n        KStream<String, FinancialMessage> financialStream =\n            builder.stream(\n                inTopicName,\n                Consumed.with(Serdes.String(), financialMessageSerde)\n            );\n\n        // create a KTable from a topic for companies.\n        KTable<String, String> companyStore = builder.table(companyTable,\n            Consumed.with(Serdes.String(), Serdes.String()),\n            Materialized.as(companyStoreSupplier));\n\n        // join KStream with KTable and use aggregate.\n        KStream<String, EnrichedMessage> enrichedStream = financialStream.join(\n                companyStore,\n                //(financialMessage, companyName) -> financialMessage.userId,\n                (financialMessage, companyName) -> {\n                    return new EnrichedMessage(financialMessage, companyName);\n                }\n            );\n\n        enrichedStream.groupByKey()\n            .aggregate(\n                AggregatedMessage::new,\n                (userId, value, aggregatedMessage) -> aggregatedMessage.updateFrom(value),\n                Materialized.<String, AggregatedMessage> as(storeSupplier)\n                                .withKeySerde(Serdes.String())\n                                .withValueSerde(aggregatedMessageSerde)\n            )\n            .toStream()\n            .to(\n                aggregatedTopicName,\n                Produced.with(Serdes.String(), aggregatedMessageSerde)\n            );\n\n        testDriver = new TopologyTestDriver(builder.build(), getStreamsConfig());\n        inTopic = testDriver.createInputTopic(inTopicName, new StringSerializer(), new JsonbSerializer<FinancialMessage>());\n        //outTopic = testDriver.createOutputTopic(outTopicName, new StringDeserializer(), new JsonbDeserializer<>(EnrichedMessage.class));\n        companyTableTopic = testDriver.createInputTopic(companyTable, new StringSerializer(), new StringSerializer());\n        aggregatedTopic = testDriver.createOutputTopic(aggregatedTopicName, new StringDeserializer(), new JsonbDeserializer<>(AggregatedMessage.class));\n    }\n\n    @AfterAll\n    public static void close(){\n        testDriver.close();\n    }\n}\n\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"What’s happening here is we’re creating a KStream ",Object(i.b)("inlineCode",{parentName:"li"},"financialStream")," and a KTable ",Object(i.b)("inlineCode",{parentName:"li"},"companyTable")," and then joining them.\nThe join of those two gives us an ",Object(i.b)("inlineCode",{parentName:"li"},"EnrichedMessage")," which we’re processing through a second KStream ",Object(i.b)("inlineCode",{parentName:"li"},"enrichedStream"),". This\nis grouped by key and the aggregate operator is called to create new Aggregated Messages which are persisted in the ",Object(i.b)("inlineCode",{parentName:"li"},"storeSupplier"),"\nstate store and also streamed to the ",Object(i.b)("inlineCode",{parentName:"li"},"aggregatedTopic"),".")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Now to add the actual Test")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'    @Test\n    public void aggregatedMessageExists() {\n\n        companyTableTopic.pipeInput("1", "Metropolitan Museum of Art");\n\n        FinancialMessage mock = new FinancialMessage(\n            "1", "MET", "SWISS", 12, 1822.38, 21868.55, 94, 7, true\n        );\n        FinancialMessage mock2 = new FinancialMessage(\n            "1", "MET", "SWISS", 12, 1822.38, 6634.56, 94, 7, true\n        );\n        inTopic.pipeInput("1", mock);\n        inTopic.pipeInput("1", mock2);\n\n        KeyValueStore<String,ValueAndTimestamp<AggregatedMessage>> aggregatedTableStore = testDriver.getTimestampedKeyValueStore(storeName);\n        Assertions.assertEquals(2, aggregatedTableStore.approximateNumEntries());\n        System.out.println("Average = " + aggregatedTableStore.get("1").value().average);\n        Assertions.assertEquals(16389.3, aggregatedTableStore.get("2").value().average);\n    }\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Here in this test we have two different financialMessages inserted with a key of ",Object(i.b)("inlineCode",{parentName:"li"},'"1"')," and there is only one entry\nin the KTable ",Object(i.b)("inlineCode",{parentName:"li"},'("1", "Metropolitan Museum of Art")'),". There are two assertions in this test. The first one passes, but the second\none fails. Why is that? There are two records within the store which is correct… however since the store is a key based, the record\nwith a key of ",Object(i.b)("inlineCode",{parentName:"li"},'"1"')," is being updated. There is no key of ",Object(i.b)("inlineCode",{parentName:"li"},'"2"'),". To get the second Assertion to pass change")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'Assertions.assertEquals(16389.3, aggregatedTableStore.get("2").value().average);\n')),Object(i.b)("p",null,"to"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'Assertions.assertEquals(16389.3, aggregatedTableStore.get("1").value().average);\n')),Object(i.b)("h2",null,"Producing to and Consuming from a Kafka Topic on Event Streams"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Typically with the Kafka Streams API it’s typically assumed that the data is already present on a topic. To expedite the processing\nwe’re going to use Reactive Messaging to quickly send some quick messages to our topic. Create a ",Object(i.b)("inlineCode",{parentName:"li"},"MockProducer.java")," class somewhere\nalong the lines of ",Object(i.b)("inlineCode",{parentName:"li"},"src/main/java/.../MockProducer.java"))),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'package com.ibm.garage.cpat.Infrastructure;\n\nimport javax.enterprise.context.ApplicationScoped;\n\nimport org.eclipse.microprofile.reactive.messaging.Outgoing;\n\nimport io.reactivex.Flowable;\nimport io.smallrye.reactive.messaging.kafka.KafkaRecord;\n\nimport java.util.concurrent.TimeUnit;\nimport java.util.Random;\n\nimport com.ibm.garage.cpat.Domain.*;\n\n\n@ApplicationScoped\npublic class MockProducer {\n\n    private Random random = new Random();\n\n    FinancialMessage mock = new FinancialMessage(\n        "1", "MET", "SWISS", 12, 1822.38, 21868.55, 94, 7, true\n        );\n\n    @Outgoing("mock-messages")\n    public Flowable<KafkaRecord<String,FinancialMessage>> produceMock() {\n        return Flowable.interval(5, TimeUnit.SECONDS)\n                       .map(tick -> {\n                            return setRandomUserId(mock);\n                        });\n    }\n\n    public KafkaRecord<String, FinancialMessage> setRandomUserId(FinancialMessage mock) {\n        mock.userId = String.valueOf(random.nextInt(100));\n\n        return KafkaRecord.of(mock.userId, mock);\n    }\n}\n')),Object(i.b)("p",null,"What this producer does is it produces a mock message every 5 seconds to the ",Object(i.b)("inlineCode",{parentName:"p"},'"mock-messages"')," channel\nwith a random userId (out of 100)."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Next create a class for the Topology that we’re going to build. Something similar to the MockProducer above i.e.\n",Object(i.b)("inlineCode",{parentName:"li"},"src/main/java/.../FinancialMessageTopology.java"))),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'package com.ibm.garage.cpat.Domain;\n\nimport javax.enterprise.context.ApplicationScoped;\nimport javax.enterprise.inject.Produces;\n\nimport org.eclipse.microprofile.config.inject.ConfigProperty;\n\nimport org.apache.kafka.common.serialization.Serdes;\nimport org.apache.kafka.streams.StreamsBuilder;\nimport org.apache.kafka.streams.Topology;\nimport org.apache.kafka.streams.kstream.Consumed;\nimport org.apache.kafka.streams.kstream.Produced;\n\nimport io.quarkus.kafka.client.serialization.JsonbSerde;\n\n\n@ApplicationScoped\npublic class FinancialMessageTopology {\n\n    @ConfigProperty(name = "START_TOPIC_NAME")\n    private String INCOMING_TOPIC;\n\n    @ConfigProperty(name = "TARGET_TOPIC_NAME")\n    private String OUTGOING_TOPIC;\n\n\n    @Produces\n    public Topology buildTopology() {\n\n        StreamsBuilder builder = new StreamsBuilder();\n\n        JsonbSerde<FinancialMessage> financialMessageSerde = new JsonbSerde<>(FinancialMessage.class);\n\n        // Stream reads from input topic, filters it by checking the boolean field on the nessage.\n        // If the boolean is true, it gets passed to the mapValues function which then that record\n        // to an outgoing topic.\n\n        builder.stream(\n            INCOMING_TOPIC,\n            Consumed.with(Serdes.String(), financialMessageSerde)\n        )\n        .filter (\n            (key, message) -> checkValidation(message)\n        )\n        .mapValues (\n            checkedMessage -> adjustPostValidation(checkedMessage)\n        )\n        .to (\n            OUTGOING_TOPIC,\n            Produced.with(Serdes.String(), financialMessageSerde)\n        );\n\n        return builder.build();\n    }\n\n    public boolean checkValidation(FinancialMessage message) {\n        return (message.technicalValidation);\n    }\n\n    public FinancialMessage adjustPostValidation(FinancialMessage message) {\n        message.totalCost = message.totalCost * 1.15;\n\n        return message;\n    }\n\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Important")," Since this is a Quarkus application a lot of the configuration settings are done via a properties file.\nIn Quarkus it’s in ",Object(i.b)("inlineCode",{parentName:"li"},"src/main/resources/application.properties"),". Open that file and paste the following. If connecting to\nEvent Streams v10.")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-properties"}),"quarkus.http.port=8080\nquarkus.log.console.enable=true\nquarkus.log.console.level=INFO\n\n# Base ES Connection Details\nmp.messaging.connector.smallrye-kafka.bootstrap.servers=${BOOTSTRAP_SERVERS}\nmp.messaging.connector.smallrye-kafka.security.protocol=SASL_SSL\nmp.messaging.connector.smallrye-kafka.ssl.protocol=TLSv1.2\nmp.messaging.connector.smallrye-kafka.sasl.mechanism=SCRAM-SHA-512\nmp.messaging.connector.smallrye-kafka.sasl.jaas.config=org.apache.kafka.common.security.scram.ScramLoginModule required \\\n                username=${SCRAM_USERNAME} \\\n                password=${SCRAM_PASSWORD};\nmp.messaging.connector.smallrye-kafka.ssl.truststore.location=${CERT_LOCATION}\nmp.messaging.connector.smallrye-kafka.ssl.truststore.password=${CERT_PASSWORD}\nmp.messaging.connector.smallrye-kafka.ssl.truststore.type=PKCS12\n\n\n# Initial mock JSON message producer configuration\nmp.messaging.outgoing.mock-messages.connector=smallrye-kafka\nmp.messaging.outgoing.mock-messages.topic=${START_TOPIC_NAME}\nmp.messaging.outgoing.mock-messages.value.serializer=io.quarkus.kafka.client.serialization.JsonbSerializer\n\n\n\n# Quarkus Kafka Streams configuration settings\nquarkus.kafka-streams.bootstrap-servers=${BOOTSTRAP_SERVERS}\nquarkus.kafka-streams.application-id=financial-stream\nquarkus.kafka-streams.application-server=localhost:8080\nquarkus.kafka-streams.topics=${START_TOPIC_NAME},${TARGET_TOPIC_NAME}\nquarkus.kafka-streams.health.enabled=true\n\nquarkus.kafka-streams.security.protocol=SASL_SSL\nquarkus.kafka-streams.ssl.protocol=TLSv1.2\nquarkus.kafka-streams.sasl.mechanism=SCRAM-SHA-512\nquarkus.kafka-streams.sasl.jaas.config=org.apache.kafka.common.security.scram.ScramLoginModule required \\\n                username=${SCRAM_USERNAME} \\\n                password=${SCRAM_PASSWORD};\nquarkus.kafka-streams.ssl.truststore.location=${CERT_LOCATION}\nquarkus.kafka-streams.ssl.truststore.password=${CERT_PASSWORD}\nquarkus.kafka-streams.ssl.truststore.type=PKCS12\n\n# pass-through options\nkafka-streams.cache.max.bytes.buffering=10240\nkafka-streams.commit.interval.ms=1000\nkafka-streams.metadata.max.age.ms=500\nkafka-streams.auto.offset.reset=latest\nkafka-streams.metrics.recording.level=DEBUG\n\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"If using a previous Event Streams version (such as v2019.4.2) or on IBM Cloud.")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-properties"}),'quarkus.http.port=8080\nquarkus.log.console.enable=true\nquarkus.log.console.level=INFO\n\n# Base ES Connection Details\nmp.messaging.connector.smallrye-kafka.bootstrap.servers=${BOOTSTRAP_SERVERS}\nmp.messaging.connector.smallrye-kafka.security.protocol=SASL_SSL\nmp.messaging.connector.smallrye-kafka.ssl.protocol=TLSv1.2\nmp.messaging.connector.smallrye-kafka.sasl.mechanism=PLAIN\nmp.messaging.connector.smallrye-kafka.sasl.jaas.config=org.apache.kafka.common.security.scram.PlainLoginModule required \\\n                username="token" \\\n                password=${API_KEY};\n# If connecting to Event Streams on IBM Cloud the following truststore options are not needed.\nmp.messaging.connector.smallrye-kafka.ssl.truststore.location=${CERT_LOCATION}\nmp.messaging.connector.smallrye-kafka.ssl.truststore.password=password\n\n\n# Initial mock JSON message producer configuration\nmp.messaging.outgoing.mock-messages.connector=smallrye-kafka\nmp.messaging.outgoing.mock-messages.topic=${START_TOPIC_NAME}\nmp.messaging.outgoing.mock-messages.value.serializer=io.quarkus.kafka.client.serialization.JsonbSerializer\n\n\n\n# Quarkus Kafka Streams configuration settings\nquarkus.kafka-streams.bootstrap-servers=${BOOTSTRAP_SERVERS}\nquarkus.kafka-streams.application-id=financial-stream\nquarkus.kafka-streams.application-server=localhost:8080\nquarkus.kafka-streams.topics=${START_TOPIC_NAME},${TARGET_TOPIC_NAME}\nquarkus.kafka-streams.health.enabled=true\n\nquarkus.kafka-streams.security.protocol=SASL_SSL\nquarkus.kafka-streams.ssl.protocol=TLSv1.2\nquarkus.kafka-streams.sasl.mechanism=PLAIN\nquarkus.kafka-streams.sasl.jaas.config=org.apache.kafka.common.security.scram.PlainLoginModule required \\\n                username="token" \\\n                password=${API_KEY};\n# If connecting to Event Streams on IBM Cloud the following truststore options are not needed.\nquarkus.kafka-streams.ssl.truststore.location=${CERT_LOCATION}\nquarkus.kafka-streams.ssl.truststore.password=password\n\n# pass-through options\nkafka-streams.cache.max.bytes.buffering=10240\nkafka-streams.commit.interval.ms=1000\nkafka-streams.metadata.max.age.ms=500\nkafka-streams.auto.offset.reset=latest\nkafka-streams.metrics.recording.level=DEBUG\n\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"As noted you can see that there are five different environment variables that we need to configure. ",Object(i.b)("inlineCode",{parentName:"li"},"START_TOPIC_NAME"),",\n",Object(i.b)("inlineCode",{parentName:"li"},"TARGET_TOPIC_NAME"),", ",Object(i.b)("inlineCode",{parentName:"li"},"BOOTSTRAP_SERVERS"),", ",Object(i.b)("inlineCode",{parentName:"li"},"CERT_LOCATION")," and ",Object(i.b)("inlineCode",{parentName:"li"},"API_KEY"),". You can get your API Key and Bootstrap Server address from your Event Streams instance\nconnection settings. Export the following environment variables. If connecting to Event Streams on IBM Cloud the ",Object(i.b)("inlineCode",{parentName:"li"},"CERT_LOCATION"),"\nisn’t needed, so you can comment out those two lines as well as not needing the ",Object(i.b)("inlineCode",{parentName:"li"},"CERT_LOCATION")," EV.")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"ESv10")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"export BOOTSTRAP_SERVERS=your-bootstrap-server-address:443 \\\nexport START_TOPIC_NAME=name-of-topic-to-consume-from \\\nexport TARGET_TOPIC_NAME=name-of-topic-to-produce-to \\\nexport CERT_LOCATION=/path-to-pkcs12-cert/es-cert.p12 \\\nexport CERT_PASSWORD=certificate-password \\\nexport SCRAM_USERNAME=your-scram-username \\\nexport SCRAM_PASSWORD=your-scram-password \\\n")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Previous ES versions")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"export BOOTSTRAP_SERVERS=your-bootstrap-server-address:443 \\\nexport START_TOPIC_NAME=name-of-topic-to-consume-from \\\nexport TARGET_TOPIC_NAME=name-of-topic-to-produce-to \\\nexport CERT_LOCATION=/path-to-jks-cert/es-cert.jks \\\nexport API_KEY=your-api-key\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"You can now test the Quarkus application")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"./mvnw quarkus:dev\n")))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-use-cases-kafka-streams-lab-2-index-mdx-2cca155a3046bf42fe45.js.map