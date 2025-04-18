// rafce
import React, { useState } from "react";

const DemoState = () => {
  // state ==> hook ==> hàm react cung cấp ==> muốn thay đổi state phải chạy phương thức cập nhật state
  //   Destructuring
  let [state, setState] = useState(10);

  const [hoTen, setHoTen] = useState("Đức Huy");

  const [font, setFont] = useState(30);

  const [carImg, setCarImg] = useState("black-car.jpg");

  const [carImg1, setCarImg1] = useState("red-car.jpg");

  let like = 1;

  console.log("like: ", like);
  let styleButton = "py-2 px-5 text-white rounded-2xl";
  // let styleTitle =
  function hanhdleChangeFontSize(check) {
    let value = check === "tang" ? font + 2 : font - 2;
    setFont(value);
  }
  function hanhdleChangeCar(tenHinhAnh) {
    setCarImg(tenHinhAnh);
  }
  function hanhdleChangeCar1(tenHinhAnh) {
    setCarImg1(tenHinhAnh);
  }
  return (
    <div>
      <h2>Demo về cách tạo và sử dụng state</h2>
      <div>
        <p>{state}</p>
        <button
          onClick={() => {
            setState((prev) => {
              return prev + 1;
            });
          }}
          className="px-4 py-2 bg-orange-500 text-white rounded-md"
        >
          Bấm tăng like
        </button>
      </div>
      <div>
        <input
          onChange={(event) => {
            setHoTen(event.target.value);
          }}
          type="text"
          value={hoTen}
        ></input>
      </div>
      <div className="py-10">
        <h2>Bài tập tăng giảm kích thước chữ</h2>
        <p
          style={{
            fontSize: font + "px",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          assumenda.
        </p>
        <button
          onClick={() => {
            hanhdleChangeFontSize("tang");
          }}
          className={styleButton + " bg-orange-500"}
        >
          Tăng
        </button>
        <button
          onClick={() => {
            hanhdleChangeFontSize("giam");
          }}
          className={styleButton + " bg-red-500"}
        >
          Giảm
        </button>
      </div>
      <div className="flex items-start gap-5">
        <img src={`./products/${carImg}`} alt="" />
        <div className="space-x-5">
          <button
            onClick={() => {
              hanhdleChangeCar("black-car.jpg");
            }}
            className={styleButton + " bg-black"}
          >
            Xe đen
          </button>
          <button
            onClick={() => {
              hanhdleChangeCar("red-car.jpg");
            }}
            className={styleButton + " bg-red-500"}
          >
            Xe đỏ
          </button>
          <button
            onClick={() => {
              hanhdleChangeCar("silver-car.jpg");
            }}
            className={styleButton + " bg-gray-500"}
          >
            Xe bạc
          </button>
        </div>
      </div>
      <div className="flex items-start gap-5 mt-5">
        <img src={`./products/${carImg1}`} alt="" />
        <button
          className={styleButton + " bg-red-500"}
          onClick={() => {
            hanhdleChangeCar1("red-car.jpg");
          }}
        >
          Red car
        </button>

        <button
          className={styleButton + " bg-gray-500"}
          onClick={() => {
            hanhdleChangeCar1("silver-car.jpg");
          }}
        >
          Gray car
        </button>
        <button
          className={styleButton + " bg-black"}
          onClick={() => {
            hanhdleChangeCar1("black-car.jpg");
          }}
        >
          Black car
        </button>
      </div>
    </div>
  );
};

export default DemoState;
