export default function TableHeadRow<T extends object>({
  data,
}: {
  data: T[];
}) {
  const headers = Object.keys(data[0]);

  return (
    <tr>
      {headers.slice(1, 4).map((key, index) => (
        <th key={index}>{key}</th>
      ))}
    </tr>
  );
}
