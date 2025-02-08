"use client";
import {List } from "lucide-react"
import {Toggle} from "../ui/toggle"
import { Heading1, Heading2, Heading3, Code, Bold, Italic, Strikethrough, AlignCenter, AlignRight, AlignLeft, Highlighter, ListOrdered } from "lucide-react";
import { HTMLProps } from "react";
        const Toolbar = ({editor}:any) => {
          if(!editor) return null

          const Options = [
            {
              icon: <Heading1 className="size-4" />,
              onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
              preesed: editor.isActive("heading", { level: 1 }),
            },
            {
              icon: <Heading2 className="size-4" />,
              onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
              preesed: editor.isActive("heading", { level: 2 }),
            },
            {
              icon: <Heading3 className="size-4" />,
              onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
              preesed: editor.isActive("heading", { level: 3 }),
            },
            {
              icon: <Bold className="size-4" />,
              onClick: () => editor.chain().focus().toggleBold().run(),
              preesed: editor.isActive("bold"),
            },
            {
              icon: <Italic className="size-4" />,
              onClick: () => editor.chain().focus().toggleItalic().run(),
              preesed: editor.isActive("italic"),
            },
            {
              icon: <Strikethrough className="size-4" />,
              onClick: () => editor.chain().focus().toggleStrike().run(),
              preesed: editor.isActive("strike"),
            },
            {
              icon: <AlignLeft className="size-4" />,
              onClick: () => editor.chain().focus().setTextAlign("left").run(),
              preesed: editor.isActive({ textAlign: "left" }),
            },
            {
              icon: <AlignCenter className="size-4" />,
              onClick: () => editor.chain().focus().setTextAlign("center").run(),
              preesed: editor.isActive({ textAlign: "center" }),
            },
            {
              icon: <AlignRight className="size-4" />,
              onClick: () => editor.chain().focus().setTextAlign("right").run(),
              preesed: editor.isActive({ textAlign: "right" }),
            },
            {
              icon: <List className="size-4" />,
              onClick: () => editor.chain().focus().toggleBulletList().run(),
              preesed: editor.isActive("bulletList"),
            },
            {
              icon: <ListOrdered className="size-4" />,
              onClick: () => editor.chain().focus().toggleOrderedList().run(),
              preesed: editor.isActive("orderedList"),
            },
            {
              icon: <Code className="size-4" />,
              onClick: () => editor.chain().focus().toggleCodeBlock().run(),
              preesed: editor.isActive("code"),
            },
            {
              icon: <Highlighter className="size-4" />,
              onClick: () => editor.chain().focus().toggleHighlight().run(),
              preesed: editor.isActive("highlight"),
            }
          ];
          return (
            <div className="border rounded-md p-2  mb-4 bg-black-50 space-x-1 sticky top-10 z-50"> 
            {Options.map((option, i)=>{
              return (<Toggle key={i} size="sm" pressed={option.preesed} onClick={option.onClick}
              >{option.icon}</Toggle>)
            })

            }

            </div>
          )
        }
        
        export default Toolbar