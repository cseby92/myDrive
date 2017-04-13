
class base64encoder{

  //replace?
  static encode(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    return reader;
  }
  static decode(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    return reader;
  }
}

export default base64encoder;
