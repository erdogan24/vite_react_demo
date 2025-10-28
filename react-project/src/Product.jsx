function Product(props) {
  return (
    <div>
      <div> Product Information</div>

      <div>
        <div>Name: {props.name}</div>
        <div>Price: {props.price} $</div>
      </div>
    </div>
  );
}

export default Product;
