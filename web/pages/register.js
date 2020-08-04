import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(
  () => import("../components/auth/Register"),
  { ssr: false }
);

function RegisterForm() {
  return (
    <>
      <div>
        <DynamicComponentWithNoSSR />
      </div>
    </>
  );
}

export default RegisterForm;
