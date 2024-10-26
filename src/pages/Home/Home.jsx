import React from "react";
import "./Home.scss";
import Banner from "../../components/Banner/Banner";
import Feature from "../../components/Feature/Feature";
import iconChat from "../../assets/img/icon-chat.png";
import iconMoney from "../../assets/img/icon-money.png";
import iconSecurity from "../../assets/img/icon-security.png";

function Home() {
  return (
    <div>
      <Banner />
      <div className="features">
        <Feature
          title={"You are our #1 priority"}
          imgSrc={iconChat}
          imgAlt={"Chat icon"}
          text={
            "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
          }
        />
        <Feature
          title={"More savings means higher rates "}
          imgSrc={iconMoney}
          imgAlt={"Money icon"}
          text={
            "The more you save with us, the higher your interest rate will be!"
          }
        />
        <Feature
          title={"Security you can trust"}
          imgSrc={iconSecurity}
          imgAlt={"Shield icon"}
          text={
            "We use top of the line encryption to make sure your data and money is always safe."
          }
        />
      </div>
    </div>
  );
}

export default Home;

/*<div>{user}</div>
    <button onClick={onChangeUser}>Change user</button>*/
