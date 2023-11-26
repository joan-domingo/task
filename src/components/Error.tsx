import "./Error.scss";

interface Props {
  message: string;
}

const Error = ({ message }: Props) => {
  return (
    <div className="error">
      <p>{message}</p>
    </div>
  );
};

export default Error;
