import React, { useEffect, useRef } from "react";

const NeoGraph = (props) => {
    const {
        containerId,
        neo4jUri,
        neo4jUser,
        neo4jPassword,
    } = props;

    const visRef = useRef();
    useEffect(() => {
        const config = {
            container_id: visRef.current.id,
            server_url: neo4jUri,
            server_user: neo4jUser,
            server_password: neo4jPassword,
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
            initial_cypher:
                // match    userid= 1
                "CALL db.schema.visualization()"
        };
        const vis = new Neovis(config);
        vis.render();
    }, [neo4jUri, neo4jUser, neo4jPassword]);

    return (
        <div
            id={containerId}
            ref={visRef}
            style={{
                width: 400,
                height: 600,
                backgroundColor: "#b2beb5",
            }}
        />
    );
};


export { NeoGraph };
