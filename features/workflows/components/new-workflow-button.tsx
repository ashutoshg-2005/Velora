"use client"

import { useState } from "react"
import { PlusIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { createWorkflowAction } from "@/features/workflows/actions"
import { WorkflowNameDialog } from "@/features/workflows/components/workflow-name-dialog"
import { generateSlug } from "@/features/workflows/lib/generate-slug"

export function NewWorkflowButton() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        <PlusIcon />
        New workflow
      </Button>
      <WorkflowNameDialog
        open={open}
        onOpenChange={setOpen}
        title="New workflow"
        submitLabel="Create"
        // A generated name as the suggestion, so Enter alone still works.
        defaultName={generateSlug()}
        onSubmit={createWorkflowAction}
      />
    </>
  )
}
