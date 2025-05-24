import React from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

const CreateSnippetPage = () => {
    return (
       <form className="space-y-4">
  <div className="m-2 space-y-2">
    <Label htmlFor="title">Title</Label>
    <Input type="text" name="title" id="title" className="w-full" />
  </div>

  <div className="m-2 space-y-2">
    <Label htmlFor="code">Code</Label>
    <Textarea name="code" id="code" className="w-full" />
  </div>

  <div className="m-2">
    {/* <Button type="submit" className="mt-6">
      New
    </Button> */}
  </div>
</form>

    )
}

export default CreateSnippetPage
