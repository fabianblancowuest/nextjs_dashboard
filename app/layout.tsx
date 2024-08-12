import { montserrat } from "./ui/fonts";
import "./ui/global.css";
import "../app/ui/styles/footer.css";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${montserrat.className} antialiased`}>
				<div className="__container__">
					{children}
					<footer className="py-10 flex justify-center items-center footer">
						<p>Created with ❤ by Fabian Blanco Wuest (2024) ©</p>
					</footer>
				</div>
			</body>
		</html>
	);
}
