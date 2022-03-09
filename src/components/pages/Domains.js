import React from "react";
import EachDomain from "./EachDomains";
import "./Domain.css";



const Domains = (props) => {
    const domains =[
       { name:".COM",
        price: "$5.99/yr",
        description: "Instead of $10.98/yr",
        button:"Buy Now",
       },
       { name:".AI",
        price:"$55.99/yr",
        description:"Instead of $10.98/yr",
        button:"Buy Now",
       },
       { name:".NET",
        price:"$7.99/yr",
        description:"Instead of $10.98/yr",
        button:"Buy Now",
       },
       { name:".HEALTH",
        price:"$7.99/yr",
        description:"Instead of $10.98/yr",
        button:"Buy Now",
       },
       { name:".CO.UK",
        price:"$3.99/yr",
        description:"Instead of $10.98/yr",
        button:"Buy Now",
       },
       { name:".ORG",
        price:"$15.99/yr",
        description:"Instead of $10.98/yr",
        button:"Buy Now",
       },
       { name:".CO",
        price:"$26.33/yr",
        description:"Instead of $10.98/yr",
        button:"Buy Now",
       },
       { name:".SEA",
        price:"$26.33/yr",
        description:"Instead of $10.98/yr",
        button:"Buy Now",
       },
    ];
    return (
        <section className="Domain-Box">
            {domains.map(data => (
                <EachDomain name={data.name} 
                price={data.price}
                description={data.description}
                button={data.button}
                />
            ))}
            </section>
    );
    
};
export default Domains;