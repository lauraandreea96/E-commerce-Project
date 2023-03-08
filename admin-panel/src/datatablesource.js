export const userColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "user",
    headerName: "User",
    width: 250,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 250,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 160,
  },
];

export const productColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "title",
    headerName: "Title",
    width: 300,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img1 || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
          {params.row.title}
        </div>
      );
    },
  },
  {
    field: "price",
    headerName: "Price",
    width: 150,
  },
  {
    field: "inStock",
    headerName: "Stock",
    width: 150,
  },
];

export const orderColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "userId",
    headerName: "User ID",
    width: 250,
  },
  {
    field: "amount",
    headerName: "Amount",
    width: 100,
  },
  {
    field: "createdAt",
    headerName: "Date",
    width: 150,
    renderCell: (params) => {
      return (
        <div>
          {params.row.createdAt.substring(0, 10)}
        </div>
      );
    },
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];