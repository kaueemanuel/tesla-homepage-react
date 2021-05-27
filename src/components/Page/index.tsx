import React from "react";
import DefaultOverlayContent from "../DefaultOverlayContent";
import { ModelSection, ModelsWrapper } from "../Model";

import { Container } from "./styles";

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            { name: "Model One", imgPath: "/assets/img/1.jpg" },
            { name: "Model Two", imgPath: "/assets/img/2.jpg" },
            { name: "Model Three", imgPath: "/assets/img/3.jpg" },
            { name: "Model Four", imgPath: "/assets/img/4.jpg" },
            { name: "Model Five", imgPath: "/assets/img/5.jpg" },
          ].map((model) => (
            <ModelSection
              key={model.name}
              className="colored"
              modelName={model.name}
              modelImg={model.imgPath}
              overlayNode={
                <DefaultOverlayContent
                  label={model.name}
                  description="Order Online for Delivery"
                />
              }
            />
          ))}
        </div>
      </ModelsWrapper>
    </Container>
  );
};

export default Page;
