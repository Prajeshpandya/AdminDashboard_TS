import { FormEvent, useEffect, useState } from "react";
import AdminSideBar from "../../components/AdminSideBar";

const allLatters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const allNumbers = "1234567890";
const allSymbols = "!@#$%^&*()_+";

export default function Coupon() {
  const [size, setSize] = useState<number>(8);
  const [prefix, setPrefix] = useState<string>("");
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(false);
  const [includeCharacters, setIncludeCharacters] = useState<boolean>(false);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const [coupon, setCoupon] = useState<string>("");

  const copyText =async (coupon: string) => {
   await window.navigator.clipboard.writeText(coupon);
   setIsCopied(true)
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!includeCharacters && !includeNumbers && !includeSymbols)
      return alert("Please Select One Atleast!");

    let result: string = prefix || "";
    const loopLength: number = size - result.length;

    for (let i = 0; i < loopLength; i++) {
      let entireString: string = "";

      if (includeCharacters) entireString += allLatters;
      if (includeNumbers) entireString += allNumbers;
      if (includeSymbols) entireString += allSymbols;

      const randomNum: number = ~~(Math.random() * entireString.length);
      result += entireString[randomNum];
    }
    setCoupon(result);
  };

  useEffect(()=>{
    setIsCopied(false)
  },[coupon])

  return (
    <div className="admin_container">
      <AdminSideBar />
      <main className="dashboard-app-container">
        <h1>Coupon</h1>
        <section>
          <form action="" className="coupon-form" onSubmit={submitHandler}>
            <input
              type="text"
              value={prefix}
              onChange={(e) => setPrefix(e.target.value)}
              maxLength={size}
              placeholder="Text to include"
            />
            <input
              type="number"
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              min={8}
              max={25}
              placeholder="Coupon length"
            />
            <fieldset>
              <legend>Include</legend>
              <input
                type="checkbox"
                checked={includeNumbers}
                onChange={() => setIncludeNumbers((prev) => !prev)}
              />
              <span>Numbers</span>
              <input
                type="checkbox"
                checked={includeSymbols}
                onChange={() => setIncludeSymbols((prev) => !prev)}
              />
              <span>Symbols</span>
              <input
                type="checkbox"
                checked={includeCharacters}
                onChange={() => setIncludeCharacters((prev) => !prev)}
              />
              <span>Characters</span>
            </fieldset>
            <button type="submit">Generate</button>
          </form>
          {coupon && (
            <code style={{textTransform:"uppercase"}}>
              {coupon}
              <span onClick={() => copyText(coupon)}>
                {isCopied ? "Copied" : "Copy"}
              </span>
            </code>
          )}
        </section>
      </main>
    </div>
  );
}
