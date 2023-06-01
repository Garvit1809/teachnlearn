import styled from "styled-components";
import { Plus } from "../general-components/svg";

const Section = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 20px;
  gap: 8px;
  width: fit-content;
  background: #000000;
  box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08),
    0px 4px 6px -2px rgba(16, 24, 40, 0.03);
  border-radius: 56px;
  font-weight: 500;
  font-size: 18px;
  color: #ffffff;
  cursor: pointer;
  /* margin-bottom:; */
`;

const PostAnnouncement = () => {
  return (
    <Section>
      <span>Make an Announcement</span>
      <Plus color="white" />
    </Section>
  );
};

export default PostAnnouncement;
