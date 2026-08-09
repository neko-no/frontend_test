type Props = {
  variant?: "primary" | "secondary";
  disabled?: boolean;
  children: React.ReactNode;
};

export const Button = ({variant = "primary", disabled, children}: Props) => {
  return (
    <button type="button" className={`btn btn-${variant}`} disabled={disabled}>
      {children}
    </button>
  )
}
