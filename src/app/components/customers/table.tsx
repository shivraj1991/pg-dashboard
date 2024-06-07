import Image from "next/image"
import {DUMMY_CUSTOMERS} from "@/data/data"
        
export default function Table() {
    return (
        <>
        <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
            <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Customer
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Phone
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Joined Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Exit Date
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  ID Proof
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {DUMMY_CUSTOMERS.map((customers) => (
                <tr
                  key={customers.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={customers.image}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${customers.name}'s profile picture`}
                      />
                      <p>{customers.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {customers.email}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {customers.phone}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {customers.joined_date} 
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {customers.exit_date} 
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                  <Image
                        src={customers.id_proof}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${customers.name}'s profile picture`}
                      />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          </div>
          </div>
        </>
    )
}