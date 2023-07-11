function Footer({ footerInfo }) {
  return (
    <div style={{ color: "blue", textAlign: "center" }}>
      <h4>{footerInfo.copyRightYear + " " + footerInfo.copyRightText}</h4>
      <h4>Created By : {" " + footerInfo.owner}</h4>
    </div>
  );
}

export default Footer;
