import rasm from "../assets/images/IMAGE.jpg"

const Layout = () => {
	let appName = "ReactJs";
	return (
		<main>
			<div className="container">
				<div className="wrapper">
					<img src={rasm} alt="rasm" className="rasm"/>
					<div className="desc">
						<div>
							<p className="illustra">Illustration</p>
							<h2 className="japan">
								Japan House opens in mountainside to foster peak creativity.
							</h2>
							<p className="illustra-2">
								Enim omittam qui id, ex quo atqui dictas complectitur. Nec ad
								timeam accusata, hinc justo falli id eum, ferri novum molestie
								eos cu.
							</p>
							<p className="reta">By Reta Torphy</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};


export default Layout;
  
