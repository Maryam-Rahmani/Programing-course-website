import Navbar from "../navbar/indext";

export interface IProps {
  children: JSX.Element;
}
const Layout = ({ children }: IProps): JSX.Element => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
};
export default Layout;
