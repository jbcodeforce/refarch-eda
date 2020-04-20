(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"hpi/":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return l}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var o=n("7ljp"),a=n("013z");n("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var i={},s={_frontmatter:i},c=a.a;function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(o.b)(c,r({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",null,"Kafka concepts?"),Object(o.b)("p",null,"See ",Object(o.b)("a",r({parentName:"p"},{href:"readme.md"}),"this introduction")),Object(o.b)("h2",null,"How to support exactly once delivery?"),Object(o.b)("p",null,"See the section in the producer implementation considerations ",Object(o.b)("a",r({parentName:"p"},{href:"producers.md"}),"note"),"."),Object(o.b)("p",null,"Also it is important to note that the Kafka Stream API supports exactly once semantics with the config: ",Object(o.b)("inlineCode",{parentName:"p"},"processing.guarantee=exactly_once"),". Each task within a read-process-write flow may fail so this setting is important to be sure the right answer is delivered, even in case of task failure, and the process is executed exactly once. "),Object(o.b)("h2",null,"Why does kafka use zookeeper?"),Object(o.b)("p",null,"Kafka as a distributed system using cluster, it needs to keep cluster states, sharing configuration like topic, assess which node is still alive within the cluster, support registrering new node added to the cluster, being able to support dynamic restart. Zookeeper is an orchestrator for distributed system, it maintains kafka cluster integrity, select broker leader… "),Object(o.b)("h2",null,"Retention time for topic what does it mean?"),Object(o.b)("p",null,"The message sent to a cluster is kept for a max period of time or until a max size is reached. Those topic properties are: ",Object(o.b)("inlineCode",{parentName:"p"},"retention.ms")," and ",Object(o.b)("inlineCode",{parentName:"p"},"retention.bytes"),". Messages stay in the log even if they are consumed. The oldest messages are marked for deletion or compaction depending of the cleanup policy (delete or compact) set to ",Object(o.b)("inlineCode",{parentName:"p"},"cleanup.policy")," parameter."),Object(o.b)("p",null,"See the kafka documentation on ",Object(o.b)("a",r({parentName:"p"},{href:"https://kafka.apache.org/documentation/#topicconfigs"}),"topic configuration parameters"),". "),Object(o.b)("p",null,"Here is a command to create a topic with specific retention properties:"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),"bin/kafka-configs --zookeeper XX.XX.XX.XX:2181 --entity-type topics --entity-name orders --alter --add-config  retention.ms=55000 --add-config  retention.byte=100000\n")),Object(o.b)("p",null,"But there is also the ",Object(o.b)("inlineCode",{parentName:"p"},"offsets.retention.minutes")," property, set at the cluster level to control when the offset information will be deleted. It is defaulted to 1 day, but the max possible value is 7 days. This is to avoid keeping too much information in the broker memory and avoid to miss data when consumers run not continuously. So consumers need to commit their offset. If the consumer settings define: ",Object(o.b)("inlineCode",{parentName:"p"},"auto.offset.reset=earliest"),", the consumer will reprocess all the events each time it restarts, (or skips to the latest if set to ",Object(o.b)("inlineCode",{parentName:"p"},"latest"),"). When using ",Object(o.b)("inlineCode",{parentName:"p"},"latest"),", if the consumers are offline for more than the offsets retention time window, they will lose events."),Object(o.b)("h2",null,"What are the topic characteristics I need to define during requirements?"),Object(o.b)("p",null,"This is a requirement gathering related question, to understand what need to be done for configuration topic configuration but also consumer and producer configuration, as well as retention strategy."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Number of brokers in the cluster"),Object(o.b)("li",{parentName:"ul"},"fire or forget or persist data for which amount of time"),Object(o.b)("li",{parentName:"ul"},"Need for HA, set replicas to number of broker or at least the value of 3"),Object(o.b)("li",{parentName:"ul"},"Type of data to transport"),Object(o.b)("li",{parentName:"ul"},"Schema management to control change to the payload definition"),Object(o.b)("li",{parentName:"ul"},"volume per day"),Object(o.b)("li",{parentName:"ul"},"Accept snapshot"),Object(o.b)("li",{parentName:"ul"},"Need to do ge replication to other kafka cluster"),Object(o.b)("li",{parentName:"ul"},"Network filesystem used on the target kubernetes cluster and current storage class")),Object(o.b)("h2",null,"What are the impacts of having not enough resource for kafka?"),Object(o.b)("p",null,"The table in this ",Object(o.b)("a",r({parentName:"p"},{href:"https://ibm.github.io/event-streams/installing/prerequisites/#helm-resource-requirements"}),"Event Streams product documentation")," illustrates the resource requirements for a getting started cluster. When resources start to be at stress, then Kafka communication to ZooKeeper and/or other Kafka brokers can suffer resulting in out-of-sync partitions and container restarts perpetuating the issue. Resource constraints is one of the first things we consider when diagnosing ES issues."),Object(o.b)("h2",null,"What does out-of-synch partition mean and occur?"),Object(o.b)("p",null,"With partition leader and replication to the followers, the number of in-synch replicas is at least the number of expected replicas. For example for a replicas = 3 the in-synch is set to 2, and it represents the minimum number of replicas that must acknowledge a write for the write to be considered successful. The record is considered “committed” when all ISRs for partition wrote to their log. Only committed records are readable from consumer."),Object(o.b)("p",null,"So out-of-synch will happen if the followers are not able to send their acknowledge to the replica leader."),Object(o.b)("h2",null,"Differences between Akka and Kafka?"),Object(o.b)("p",null,Object(o.b)("a",r({parentName:"p"},{href:"https://akka.io/"}),"Akka")," is a open source toolkit for Scala or Java to simplify multithreading programming and makes application more reactive by adopting an asynchronous mechanism to access to io: database or HTTP request. To support asynchronous communication between ‘actors’, it uses messaging, internal to the JVM.\nKafka is part of the architecture, while Akka is an implementation choice for one of the component of the business application deployed inside the architecture. "),Object(o.b)("p",null,Object(o.b)("a",r({parentName:"p"},{href:"https://vertx.io/"}),"vert.x")," is another open source implementation of such internal messaging mechanism but supporting more language:  Java, Groovy, Ruby, JavaScript, Ceylon, Scala, and Kotlin."),Object(o.b)("h2",null,"Event streams resource requirements"),Object(o.b)("p",null,"See the ",Object(o.b)("a",r({parentName:"p"},{href:"https://ibm.github.io/event-streams/installing/prerequisites/#helm-resource-requirements"}),"detailed tables")," in the product documentation."),Object(o.b)("h2",null,"Other FAQs"),Object(o.b)("p",null,Object(o.b)("a",r({parentName:"p"},{href:"https://cloud.ibm.com/docs/services/EventStreams?topic=eventstreams-faqs"}),"IBM Event streams on Cloud FAQ")," "),Object(o.b)("p",null,Object(o.b)("a",r({parentName:"p"},{href:"https://cwiki.apache.org/confluence/display/KAFKA/FAQ#FAQ-HowareKafkabrokersdependonZookeeper?"}),"FAQ from Confluent")))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-kafka-faq-mdx-e6d3e89e1308e3eb50bc.js.map