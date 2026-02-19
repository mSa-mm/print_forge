import type { ModelDetailPageProps } from "@/app/types"
import { getModelById } from "@/app/lib/models"
import type { Model } from "@/app/types"
import ModelCard from "@/app/components/ModelCard"
export default async function ModelDetailPage({ params }: ModelDetailPageProps) {
  
  const { id } = await params
  const modelInfo: Model = await getModelById(id)

  return (
  <ModelCard key={id} model={modelInfo}></ModelCard>
)
}