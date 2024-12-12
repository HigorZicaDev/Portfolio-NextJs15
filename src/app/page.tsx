'use client'

import { Phone, MoreHorizontal, BadgeCheck, Github, MessageSquareHeart } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import TestimonialSection  from "@/components/partials/testimonialsection"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ImageCarouselModal } from '@/components/partials/imagecarouselmodal'
import { Footer } from '@/components/partials/footer'
import { AboutSection } from '@/components/partials/aboutsection'
import { posts } from '@/data/posts'
import { getIp } from '@/actions/getIpUser'
import { v4 as uuidv4 } from 'uuid';
import { createLikeUser } from '@/actions/saveLikeUser'; // Importa a ação de criação de like
import { getTotalLikes } from '@/actions/getTotalLikes'
import { toast, ToastContainer } from 'react-toastify'

export default function Home() {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [selectedPost, setSelectedPost] = useState<typeof posts[0] | null>(null);
  const [ip, setIp] = useState<string | null>(null); // Estado para armazenar o IP
  const [userId, setUserId] = useState<string | null>(null);

  const phoneNumber = "33648564760"; // Substitua pelo número de telefone com o código do país.
  const message = "Hello Higor, I found your contact through your website."; // Mensagem inicial opcional.


  useEffect(() => {
    const fetchIp = async () => {
      const fetchedIp = await getIp(); // Chama a função para obter o IP
      setIp(fetchedIp); // Atualiza o estado com o IP obtido
    };

    let id = localStorage.getItem('userId');
    if (!id) {
      id = uuidv4();
      localStorage.setItem('userId', id);
    }
    setUserId(id);

    fetchIp();
    fetchLikeCount(); // Chama a função para carregar o total de likes
  }, []);

  async function handleLike() {
    try {
      const response = await createLikeUser(userId || '', ip || '');
      if (!response.success) {
        toast.warn(response.message); // Mostra a mensagem específica do servidor
      } else {
        toast.success("Obrigado pelo like!");
        fetchLikeCount(); // Atualiza a contagem de likes após sucesso
      }
    } catch (error) {
      console.error("Erro ao salvar o like:", error);
      toast.error("Erro ao salvar o like. Tente novamente.");
    }
  }

  async function fetchLikeCount() {
    try {
      const totalLikes = await getTotalLikes(); // Chama a ação para obter o total de likes
      setLikeCount(totalLikes); // Atualiza o estado com o total de likes
    } catch (error) {
      console.error("Erro ao carregar a contagem de likes:", error);
    }
  }

  function handleMessage() {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  function openGithub() {
    const githubUrl = `https://github.com/HigorZicaDev`;
    window.open(githubUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <ToastContainer />
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <Link href="/" className="text-white">
          <Image                   
            src="/logo.png"
            alt="Logo"
            width={24}
            height={24}
            className="w-full h-full object-cover rounded-full" />
        </Link>
        <Button variant="ghost" size="icon" className="text-white">
          <MoreHorizontal className="h-6 w-6" />
        </Button>
      </div>

      {/* Profile Info */}
      <div className="min-h-screen flex flex-col items-center max-w-2xl mx-auto px-4 pt-2 mb-5">
        <div className="relative">
          <Avatar className="h-20 w-20 border-2 border-white">
            <AvatarImage src="https://avatars.githubusercontent.com/u/165382509?v=4" />
            <AvatarFallback>GB</AvatarFallback>
          </Avatar>
          <div className="absolute -right-1 bottom-0">
            <BadgeCheck className="h-6 w-6 text-green-500" />
          </div>
        </div>
        <h1 className="text-xl font-bold">Higor Zica</h1>
        <p className="text-sm text-gray-400">@higorzica</p>

        {/* Stats */}
        <div className="flex gap-6 text-center">
          <div>
            <p className="font-semibold">{likeCount}</p>
            <p className="text-xs text-gray-400">Likes</p>
          </div>
          <div>
            <p className="font-semibold">7</p>
            <p className="text-xs text-gray-400">Projects</p>
          </div>

        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex w-full gap-3">
          <Button onClick={handleLike} className="flex-1 bg-red-500 text-white hover:bg-red-600">
            <MessageSquareHeart className="h-6 w-6"  /> Like this Page
          </Button>
          <Button onClick={handleMessage} variant="secondary" className="flex-1 bg-green-600 text-white hover:bg-green-700">
            <Phone className="h-6 w-6" /> Message
          </Button>
          <Button onClick={openGithub} size="icon" variant="secondary" className="bg-zinc-800 text-white hover:bg-zinc-700">
            <Github className="h-4 w-4" />
          </Button>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="projects" className="mt-6 w-full">
          <TabsList className="w-full justify-start gap-6 bg-transparent">
            <TabsTrigger
              value="projects"
              className="data-[state=active]:text-black data-[state=active]:border-b-2 data-[state=active]:border-green-500"
            >
              Projects
            </TabsTrigger>
            <TabsTrigger
              value="depoiments"
              className="text-gray-400 data-[state=active]:text-black data-[state=active]:border-b-2 data-[state=active]:border-green-500"
            >
              Depoiments
            </TabsTrigger>
            <TabsTrigger
              value="about"
              className="text-gray-400 data-[state=active]:text-black data-[state=active]:border-b-2 data-[state=active]:border-green-500"
            >
              About
            </TabsTrigger>
          </TabsList>
          {/* Grid */}
          <TabsContent value="projects">
            <div className="mt-4 grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {posts.map((post) => (
                  <div className='p-3 border rounded bg-black' key={post.id}>
                      <p className='mb-4 font-medium'>{post.name}</p>
                      <button
                      className="rounded-lg overflow-hidden"
                      onClick={() => setSelectedPost(post)}>
                        <Image
                          src={post.mainImage}
                          alt={`Post ${post.id}`}
                          width={200}
                          height={230}
                          className="w-full object-cover"
                        />
                    </button>
                  </div>
              ))}
            </div>
          </TabsContent>
          {/* Depoiments */}
          <TabsContent value="depoiments">
            <div className="mt-4 w-full">
              <TestimonialSection />
            </div>
          </TabsContent>
          {/* About */}
          <TabsContent value="about">
            <div className="mt-4 w-full">
              <AboutSection />
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Carousel Modal */}
      {selectedPost && (
        <ImageCarouselModal
          isOpen={true}
          onClose={() => setSelectedPost(null)}
          images={[selectedPost.mainImage, ...selectedPost.additionalImages]}
        />
      )}

      <Footer />
    </div>
  );
}
