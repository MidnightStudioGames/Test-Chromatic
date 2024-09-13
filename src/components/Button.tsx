

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button style={{ color: 'yellow'  }} onClick={onClick}>{children}</button>
  );
}