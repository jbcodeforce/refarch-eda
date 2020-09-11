(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{"M+yy":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return m}));var a=n("wx14"),r=n("zLVn"),i=(n("q1tI"),n("7ljp")),o=n("013z"),l=(n("qKvR"),{}),c=function(e){return function(t){return console.warn("Component '"+e+"' was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},b=c("AnchorLinks"),s=c("AnchorLink"),p={_frontmatter:l},u=o.a;function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)(u,Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(b,{mdxType:"AnchorLinks"},Object(i.b)(s,{mdxType:"AnchorLink"},"Overview"),Object(i.b)(s,{mdxType:"AnchorLink"},"Scenario Prerequisites"),Object(i.b)(s,{mdxType:"AnchorLink"},"Develop the application")),Object(i.b)("h2",null,"Overview"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"In this lab scenario we’re going to use ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://quarkus.io"}),"Quarkus")," to develop the core application with Kafka streams api and microprofile reactive messaging."),Object(i.b)("li",{parentName:"ul"},"We will be testing using ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://kafka.apache.org/documentation/streams/"}),"Apache Kafka Streams")," TestDriver to mimic a Topology, a Stream and Table.")),Object(i.b)("p",null,"The requirements to address are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"consume item sold from items topic, item has unique key. Item event has store information"),Object(i.b)("li",{parentName:"ul"},"compute for each item its current stock cross store"),Object(i.b)("li",{parentName:"ul"},"compute the store stock for each item"),Object(i.b)("li",{parentName:"ul"},"generate inventory event for store - item - stock"),Object(i.b)("li",{parentName:"ul"},"expose APIs to get stock for a store or for an item")),Object(i.b)("h2",null,"Scenario Prerequisites"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Java")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"For the purposes of this lab we suggest Java 11+")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Maven")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Maven will be needed for bootstrapping our application from the command-line and running\nour application.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"An IDE of your choice")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Ideally an IDE that supports Quarkus (such as Visual Studio Code)")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"OpenShift Container Platform")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"- v4.4.x\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"IBM Cloud Pak for Integration")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"- CP4I2020.2\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"IBM Event Streams")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"- The section on use with Event Streams on CP4I assumes Event Streams v10. IF using a previous version such as ESv2019.4.2\nthere are some differences to how you would configure `application.properties` to establish a connectio\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Code Source"),": clone the following git repository: ",Object(i.b)("inlineCode",{parentName:"p"},"git clone https://github.com/ibm-cloud-architecture/refarch-eda-item-inventory")),Object(i.b)("h2",null,"Develop the application"),Object(i.b)("h3",null,"Setting up the Quarkus Application"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"We will bootstrap the Quarkus application with the following Maven command")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),'mvn io.quarkus:quarkus-maven-plugin:1.7.2.Final:create \\\n    -DprojectGroupId={com.ibm} \\\n    -DprojectArtifactId={quarkus-kstreams-lab} \\\n    -Dextensions="kafka,kafka-streams,resteasy-jsonb,smallrye-health,smallrye-reactive-messaging-kafka,quarkus-smallrye-openapi,quarkus-kafka-streams,openshift"\n')),Object(i.b)("p",null,"You can replace the fields within {} as you like."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"recall that is if you want to add an extension do something like: ",Object(i.b)("inlineCode",{parentName:"li"},'./mvnw Quarkus:add-extension -Dextensions="kafka"')),Object(i.b)("li",{parentName:"ul"},"Since we will be using the Kafka Streams testing functionality we will need to edit the ",Object(i.b)("inlineCode",{parentName:"li"},"pom.xml")," to add\nthe dependency to our project. Open ",Object(i.b)("inlineCode",{parentName:"li"},"pom.xml")," and add the following.")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n    <groupId>org.apache.kafka</groupId>\n    <artifactId>kafka-streams-test-utils</artifactId>\n    <version>2.5.0</version>\n    <scope>test</scope>\n</dependency>\n")),Object(i.b)("h3",null,"Start the dev mode"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"./mvnw quarkus:dev\n")),Object(i.b)("h2",null,"Define the domain entities"),Object(i.b)("p",null,"Under the ",Object(i.b)("inlineCode",{parentName:"p"},"src/main/java/../domain")," folder add the two classes representing the business entities we are using:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-Java"}),'public class Item {\n    public static String RESTOCK = "RESTOCK";\n    public static String SALE = "SALE";\n    public String storeName;\n    public String sku;\n    public int quantity;\n    public String type;\n    public Double price;\n    public String timestamp;\n\n    public Item(){}\n}\n')),Object(i.b)("p",null,"This item will also being used for event structure on ",Object(i.b)("inlineCode",{parentName:"p"},"items")," topic. The type attribute is to specify if this is a sale event or a restock event."),Object(i.b)("p",null,"The inventory per store includes a map of item.sku and quantity."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-Java"}),"public class Inventory {\n    public String storeName;\n    public HashMap<String,Long> stock = new HashMap<String,Long>();\n    public Inventory(){}\n}\n")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-use-cases-kafka-streams-lab-3-index-mdx-f2d884e714baa1d35a2a.js.map