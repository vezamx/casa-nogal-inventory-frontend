interface WrapRequestProps {
  wrappedBy: string;
  data: unknown;
}
export const WrapRequest = (props: WrapRequestProps) => {
  const parsedWrappedName = props.wrappedBy.replace(" ", "_");
  return {
    [parsedWrappedName]: props.data,
  };
};
