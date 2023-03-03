import { FC, useState } from "react";
import { Button } from "../components/button";
import PageContainer from "../components/pageContainer/PageContainer";

const DemoApp: FC = () => {
  const [color, setColor] = useState("rose");
  const [buttonClicks, setButtonClicks] = useState(0);

  return (
    <PageContainer color={color} fullPage>
      <div className="p-4">
        <Button
          color={color}
          onClick={() => void setButtonClicks((prev) => prev + 1)}
        >
          I've been clicked {buttonClicks} times
        </Button>
      </div>
    </PageContainer>
  );
};

export default DemoApp;
