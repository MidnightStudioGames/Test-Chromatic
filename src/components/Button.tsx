

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button style={{ color: 'blue'  }} onClick={onClick}>{children}</button>
  );
}