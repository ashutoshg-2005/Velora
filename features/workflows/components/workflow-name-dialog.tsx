"use client"

import { useTransition } from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

// The one dialog for naming a workflow, used both when creating one and when
// renaming one. Fully controlled (no trigger inside) so dropdown menu items can
// open it after their menu has closed.
export function WorkflowNameDialog({
  open,
  onOpenChange,
  title,
  submitLabel,
  defaultName,
  onSubmit,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  submitLabel: string
  defaultName: string
  onSubmit: (name: string) => Promise<void>
}) {
  const [isPending, startTransition] = useTransition()

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <form
          className="flex flex-col gap-4"
          onSubmit={(event) => {
            event.preventDefault()
            const name = new FormData(event.currentTarget).get("name")
            if (typeof name !== "string" || !name.trim()) return
            startTransition(async () => {
              await onSubmit(name.trim())
              onOpenChange(false)
            })
          }}
        >
          <Input
            name="name"
            defaultValue={defaultName}
            autoFocus
            // Pre-selected so typing replaces the suggestion in one stroke.
            onFocus={(event) => event.currentTarget.select()}
            required
          />
          <DialogFooter>
            <Button type="submit" disabled={isPending}>
              {submitLabel}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
