import Card from './CardStyle';

const Index = ({
  children,
  width,
  height,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  background,
}) => {
  return (
    <Card
      width={width}
      height={height}
      paddingTop={paddingTop}
      paddingRight={paddingRight}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      background={background}
    >
      {children}
    </Card>
  );
};

export default Index;
