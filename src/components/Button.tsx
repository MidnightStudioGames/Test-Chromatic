

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button style={{ color: 'red'  }} onClick={onClick}>{children}</button>
  );
}