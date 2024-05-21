import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TCloth } from "@/types";

const AllProductPage = async () => {
  const res = await fetch(`http://localhost:5000/api/v1/cloth`, {
    cache: "no-store",
  });

  const cloth = await res.json();

  const discountedPriceGenerator = (price: number, discount: number) => {
    const discountedPrice = (price - price * (discount / 100)).toFixed(2);
    return discountedPrice;
  };

  return (
    <div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">No.</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Brand</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Discount</TableHead>
            <TableHead>Discounted Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cloth?.data?.map((cloth: TCloth, i: number) => (
            <TableRow key={cloth?._id}>
              <TableCell className="font-medium">{i + 1}</TableCell>
              <TableCell>{cloth?.name}</TableCell>
              <TableCell>{cloth?.brand}</TableCell>
              <TableCell>${cloth?.price}</TableCell>
              <TableCell>{cloth?.discount}%</TableCell>
              <TableCell>${discountedPriceGenerator(cloth?.price, cloth?.discount)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AllProductPage;
