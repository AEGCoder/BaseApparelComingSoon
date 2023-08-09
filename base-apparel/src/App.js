import { BiArrowFromLeft } from "react-icons/bi";
import { Form, Input, message } from "antd";
function App() {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Success:", values);
    message.success("SUCCESSFULLY SUBMITTED");
    form.resetFields();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="h-screen w-full bg-yellow-50 flex md:flex-row flex-col items-center">
      <div className="md:w-[50%] w-[90%] flex flex-col items-start justify-around  p-5 md:pl-16 pl-0">
        <h1 className="text-2xl font-light tracking-widest">
          BASE <br /> APPAREL
        </h1>
        <h2 className="text-7xl font-extralight tracking-widest">
          <span className="text-pink-500"> WE'RE</span>
          <span className="font-bold">
            <br /> COMING <br /> SOON
          </span>
        </h2>
        <p className="text-pink-400 leading-10 text-xl text-center">
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals.
        </p>
        <div className="w-full py-2">
          <Form
          form = {form}
          className="md:w-[80%] w-full relative"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input placeholder="Email Adress..." className="py-2 placeholder:text-orange-300  tracking-wider"/>
            </Form.Item>         
           <button type="submit" className="bg-pink-500 absolute top-0 right-0 text-white py-2 px-10 cursor-pointer rounded-md hover:bg-pink-800 transition duration-300 ease-in-out tracking-wider">
              <BiArrowFromLeft className="inline-block mr-2 text-2xl" />
            </button>
          </Form>
        </div>
      </div>
      <div className="md:w-[50%] w-[95%] h-full md:pb-0 pb-3">
        <img
          src="./images/hero-desktop.jpg"
          alt="hero"
          className="w-full h-full object-fill"
        />
      </div>
    </div>
  );
}

export default App;
