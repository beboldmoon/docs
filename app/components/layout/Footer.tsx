import Link from "next/link";
import { Container } from "../ui/Container";

export function Footer() {
    return (
        <footer className="bg-[#111827] text-gray-400 py-12 border-t border-gray-800">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="text-2xl font-bold font-outfit text-white">
                            AIVE
                        </Link>
                        <p className="text-sm leading-relaxed">
                            AI 시대, 미래를 코딩하다.<br />
                            실무 중심의 AI·코딩 교육 전문가<br />
                            문수희 (Ashley Moon)
                        </p>
                    </div>

                    {/* Programs */}
                    <div>
                        <h3 className="text-white font-bold mb-4 font-outfit">교육 프로그램</h3>
                        <ul className="space-y-2 text-sm">
                            <li>AI & ChatGPT 활용</li>
                            <li>코딩 교육 (Python, Block)</li>
                            <li>로봇 & 메이킹 (FLL)</li>
                            <li>기업 교육 & 특강</li>
                        </ul>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-white font-bold mb-4 font-outfit">바로가기</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#about" className="hover:text-white transition-colors">About Me</Link></li>
                            <li><Link href="#expertise" className="hover:text-white transition-colors">전문 분야</Link></li>
                            <li><Link href="#portfolio" className="hover:text-white transition-colors">포트폴리오</Link></li>
                            <li><Link href="#contact" className="hover:text-white transition-colors">강의 문의</Link></li>
                        </ul>
                    </div>

                    {/* Affiliations */}
                    <div>
                        <h3 className="text-white font-bold mb-4 font-outfit">소속 및 협력</h3>
                        <ul className="space-y-2 text-sm">
                            <li>드림베이스</li>
                            <li>퓨너스</li>
                            <li>로보라이즌</li>
                            <li>쪼앤미</li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                    <p>© 2024 대담쌤 BeBold (Ashley Moon). All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="https://instagram.com/aive.msh" target="_blank" className="hover:text-white transition-colors">Instagram</Link>
                        <Link href="https://blog.naver.com/beboldmoon" target="_blank" className="hover:text-white transition-colors">Blog</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
