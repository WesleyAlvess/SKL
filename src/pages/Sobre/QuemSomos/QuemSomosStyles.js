import styled from "styled-components";

export const ContainerSobre = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const SectionBanner = styled.section`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h3 {
    color: gray;
    font-size: 25px;
    text-align: center;
    margin-bottom: 12px;
  }

  p {
    color: #363636;
    font-size: 18px;
    text-align: center;
    margin-bottom: 20px;
  }

  img {
    width: 80%;
    border-radius: 30px;
    margin-top: 5px;
  }

  span {
    text-align: center;
    width: 65%;
    font-style: italic;
    font-size: 14px;
    margin-top: 10px;
  }
`;

export const SectionVideo = styled.section`
  width: 100%;
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h3`
  color: gray;
  font-size: 25px;
  text-align: center;
  margin-bottom: 12px;
`;

export const ContainerVideo = styled.section`
  width: 100%;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;

  p {
    font-size: 20px;
    line-height: 1.6;
    color: #333;
    margin-bottom: 0;
    width: 50%;
    padding: 20px;
  }

  iframe {
    width: 50%;
    max-width: 500px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    background-color: #000;
  }
`;

export const SectionImgAldeia = styled.section`
  width: 100%;
  margin-top: 100px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 25px;

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img {
      width: 70%;
      border-radius: 15px;
    }
  }

  p {
    font-size: 20px;
    line-height: 1.6;
    color: #333;
    margin-bottom: 0;
    width: 50%;
    padding: 20px;
  }

  span {
    text-align: center;
    width: 65%;
    font-style: italic;
    font-size: 14px;
    margin-top: 8px;
  }
`;

export const SectionStatistics = styled.section`
  width: 100%;
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h3 {
      color: gray;
      font-size: 25px;
      text-align: center;
      margin-bottom: 12px;
    }

    p {
      font-size: 20px;
      line-height: 1.6;
      color: #333;
      width: 100%;
      padding: 20px;
      text-align: justify;
    }
  }
`;

export const ContainerNumeros = styled.div`
  width: 100%;
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15%;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    span {
      font-size: 50px;
      font-weight: bold;
      color: #2566ae;
    }

    p {
      font-size: 16px;
      font-weight: bold;
      color: #363636;
    }
  }
`;

export const ContainerInfo = styled.p`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 100px;

  div {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      font-size: 20px;
      line-height: 1.6;
      color: #333;
      width: 100%;
      padding: 20px;
      text-align: justify;
    }
  }
`;
