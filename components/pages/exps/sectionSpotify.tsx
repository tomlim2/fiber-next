import Title from "@/components/texts/title";
import ButtonBasic from "@/components/buttons/buttonBasic";

import variables from "styles/variables.module.scss";

import useModel from "models";

const SectionSpotify = () => {
  const model = useModel();
  const onClick = (id: string) => {
    switch (id) {
      case "login":
        model.spotify.login();

        break;

      default:
        break;
    }
    console.log(id);
  };

  return (
    <>
      <section>
        <div>
          <Title>Login to Spotify</Title>
          <div>
            <ButtonBasic
              backgroundColor={variables.spotify}
              color={variables.black100}
              onClick={() => onClick("login")}
            >
              Login
            </ButtonBasic>
            <ButtonBasic onClick={() => onClick("logout")} disabled={true}>
              Logout
            </ButtonBasic>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionSpotify;
