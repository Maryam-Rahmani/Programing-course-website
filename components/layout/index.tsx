import Navbar from "../navbar/index";

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
