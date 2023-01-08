import ButtonBasic from "@/components/buttons/buttonBasic";
import useModel from "models";

import { Title } from "styles/text";
import { Section } from "styles/section";

import type { ISectionProps } from "types/app";

const SectionSpotify: React.FC<ISectionProps> = ({
  backgroundColor,
  color,
}) => {
  const sectionStyles = { backgroundColor, color };

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
      <Section sectionStyles={sectionStyles}>
        <Title usage="section">Login to Spotify</Title>
        <div>
          <ButtonBasic onClick={() => onClick("login")}>Login</ButtonBasic>
          <ButtonBasic onClick={() => onClick("logout")} disabled={true}>
            Logout
          </ButtonBasic>
        </div>
      </Section>
    </>
  );
};

export default SectionSpotify;
