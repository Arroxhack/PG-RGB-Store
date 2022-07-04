import React, { useContext } from "react";
import NavBar from "../NavBar/NavBar";
import { CartContext } from "./CartContext";

function Done() {
  const { products } = useContext(CartContext);

  let total = 0;
  products.forEach((p) => (total += p.amount * p.price));

  return (
    <section className="font-Open bg-primary-200 h-screen">
      <NavBar />
      <div className="px-5 py-24 mx-auto sm:bg-primary-200">
        <div className="flex flex-col bg-primary-200 text-center w-full">
          <h2 className="text-xs tracking-widest font-medium text-secundary-250  mt-10 mb-1 ">
            Congrats, your purchase has been successfully!
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium mb-4 text-secundary-250 ">
            Thanks for buying with us!
          </h1>
          <p className="lg:w-2/3 mb-5 mx-auto leading-relaxed text-secundary-250  text-base">
            Here is the summary of your order:
          </p>
          <div className=" mx-auto rounded p-5 w-fit bg-secundary-250 sm:">
            <div className="flex flex-col mx-0 mt-8">
              <table className="min-w-full divide-y">
                <thead>
                  <tr className="font-black">
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm sm:pl-6 md:pl-0"
                    >
                      Product
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-3 text-right text-sm sm:table-cell"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-3 text-right text-sm sm:table-cell"
                    >
                      Rate
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-3 pr-4 text-right text-sm  sm:pr-6 md:pr-0"
                    >
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((p) => {
                    return (
                      <tr key={p.name} className="border-b border-primary-100">
                        <td className="py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
                          <div className="font-medium" key={p.name}>{p.name}</div>
                        </td>
                        <td className="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
                          {p.amount}
                        </td>
                        <td className="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
                          ${p.price}
                        </td>
                        <td className="py-4 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                          ${p.amount * p.price}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr>
                    <th
                      scope="row"
                      colSpan="3"
                      className="pt-2 pr-3 text-sm font-black text-right text-slate-500 sm:table-cell md:pl-0"
                    >
                      Subtotal
                    </th>

                    <td className="pt-2 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                      {`$ ${total.toFixed(2)}`}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div></div>
           
          </div>
          <p className="lg:w-2/3 mx-auto my-5 text-secundary-250 leading-relaxed text-base">
              We sent a copy to your mail!
            </p>
        </div>
      </div>
    </section>
  );
}

export default Done;
