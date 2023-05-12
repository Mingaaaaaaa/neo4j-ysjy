import React, { useRef, useEffect } from "react";
import Neovis from "neovis.js/dist/neovis.js";

// const NEO4J_URI = "bolt://124.222.4.79:7474";
// const NEO4J_URI = "bolt://100.27.36.92:7687";
// const NEO4J_USER = "neo4j";
// // const NEO4J_PASSWORD = "password";
// const NEO4J_PASSWORD = "beacons-ramps-subordinates";

const App = () => {
    // const data = window.location.href.split('=')[1].toString()
    //MATCH (a:Airport)RETURNaLIMIT4
    // console.log(data.slice(0, 5) + " " + data.slice(5,16)+' '+data.slice(16,22)+" "+data.slice(22,23)+" "+data.slice(23,28)+" "+data.slice(27));
    const visRef = useRef();
    useEffect(() => {
        const config = {
            container_id: 'id1',
            server_url: "bolt://124.222.4.79:7473",
            server_user: "neo4j",
            server_password: "password",
            encrypted: "ENCRYPTION_ON",
            trust: "TRUST_ALL_CERTIFICATES",
            labels: {
                Troll: {
                    caption: "user_key",
                    size: "pagerank",
                    community: "community",
                },
            },
            relationships: {
                RETWEETS: {
                    caption: false,
                    thickness: "count",
                },
            },
            initial_cypher: "MATCH (n) RETURN n LIMIT 25"
        };
        const vis = new Neovis(config);
        vis.render();
    }, []);

    return (
        <div
            id='id1'
            ref={visRef}
            style={{
                width: 400,
                height: 800,
                backgroundColor: "rgb(215 247 229)",
            }}
        />
    );
};

//   return (
//     <div className="App" style={{ fontFamily: "Quicksand" }}>
//       <NeoGraph
//         width={400}
//         height={800}
//         containerId={"id1"}
//         neo4jUri={NEO4J_URI}
//         neo4jUser={NEO4J_USER}
//         neo4jPassword={NEO4J_PASSWORD}
//         backgroundColor={"#b2beb5"}
//       />
//     </div>
//   );
// };

export default App;
