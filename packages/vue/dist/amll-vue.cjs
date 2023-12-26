"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const n=require("vue"),d=require("@applemusic-like-lyrics/core"),E=n.defineComponent({inheritAttrs:!1,__name:"LyricPlayer",props:{disabled:{type:Boolean},alignAnchor:{},alignPosition:{},enableSpring:{type:Boolean},enableBlur:{type:Boolean},enableScale:{type:Boolean},hidePassedLines:{type:Boolean},lyricLines:{},currentTime:{},linePosXSpringParams:{},linePosYSpringParams:{},lineScaleSpringParams:{},bottomLine:{}},emits:["line-click","line-contextmenu"],setup(u,{expose:f,emit:r}){const t=u,i=r,a=n.ref(),l=n.ref(),m=e=>i("line-click",e),v=e=>i("line-contextmenu",e);return n.onMounted(()=>{a.value&&(l.value=new d.LyricPlayer,a.value.appendChild(l.value.getElement()),l.value.addEventListener("line-click",m),l.value.addEventListener("line-contextmenu",v))}),n.onUnmounted(()=>{l.value&&(l.value.removeEventListener("line-click",m),l.value.removeEventListener("line-contextmenu",v),l.value.dispose())}),n.watchEffect(e=>{if(!t.disabled){let o=!1,c=-1;const s=p=>{var g;o||(c===-1&&(c=p),(g=l.value)==null||g.update(p-c),c=p,requestAnimationFrame(s))};requestAnimationFrame(s),e(()=>{o=!0})}}),n.watchEffect(()=>{var e;t.alignAnchor!==void 0&&((e=l.value)==null||e.setAlignAnchor(t.alignAnchor))}),n.watchEffect(()=>{var e;t.hidePassedLines!==void 0&&((e=l.value)==null||e.setHidePassedLines(t.hidePassedLines))}),n.watchEffect(()=>{var e;t.alignPosition!==void 0&&((e=l.value)==null||e.setAlignPosition(t.alignPosition))}),n.watchEffect(()=>{var e,o;t.enableSpring!==void 0?(e=l.value)==null||e.setEnableSpring(t.enableSpring):(o=l.value)==null||o.setEnableSpring(!0)}),n.watchEffect(()=>{var e,o;t.enableBlur!==void 0?(e=l.value)==null||e.setEnableBlur(t.enableBlur):(o=l.value)==null||o.setEnableBlur(!0)}),n.watchEffect(()=>{var e,o;t.enableScale!==void 0?(e=l.value)==null||e.setEnableScale(t.enableScale):(o=l.value)==null||o.setEnableScale(!0)}),n.watchEffect(()=>{var e;t.lyricLines!==void 0&&((e=l.value)==null||e.setLyricLines(t.lyricLines))}),n.watchEffect(()=>{var e;t.currentTime!==void 0&&((e=l.value)==null||e.setCurrentTime(t.currentTime))}),n.watchEffect(()=>{var e;t.linePosXSpringParams!==void 0&&((e=l.value)==null||e.setLinePosXSpringParams(t.linePosXSpringParams))}),n.watchEffect(()=>{var e;t.linePosYSpringParams!==void 0&&((e=l.value)==null||e.setLinePosYSpringParams(t.linePosYSpringParams))}),n.watchEffect(()=>{var e;t.lineScaleSpringParams!==void 0&&((e=l.value)==null||e.setLineScaleSpringParams(t.lineScaleSpringParams))}),f({lyricPlayer:l,wrapperEl:a}),(e,o)=>{var c,s;return n.openBlock(),n.createElementBlock(n.Fragment,null,[n.createElementVNode("div",n.mergeProps({ref_key:"wrapperRef",ref:a},e.$attrs),null,16),(c=l.value)!=null&&c.getBottomLineElement()&&t.bottomLine?(n.openBlock(),n.createBlock(n.Teleport,{key:0,to:(s=l.value)==null?void 0:s.getBottomLineElement()},null,8,["to"])):n.createCommentVNode("",!0)],64)}}}),h=n.defineComponent({__name:"BackgroundRender",props:{albumImageUrl:{},fps:{},playing:{type:Boolean},flowSpeed:{},hasLyric:{type:Boolean},lowFreqVolume:{},renderScale:{},renderer:{type:Function}},setup(u,{expose:f}){const r=u,t=n.ref(),i=n.ref();return n.onMounted(()=>{if(t.value){i.value=d.BackgroundRender.new(r.renderer??d.PixiRenderer);const a=i.value.getElement();a.style.width="100%",a.style.height="100%",t.value.appendChild(a)}}),n.onUnmounted(()=>{i.value&&i.value.dispose()}),n.watchEffect(()=>{var a;r.albumImageUrl&&((a=i.value)==null||a.setAlbumImage(r.albumImageUrl))}),n.watchEffect(()=>{var a;r.fps&&((a=i.value)==null||a.setFPS(r.fps))}),n.watchEffect(()=>{var a,l;r.playing?(a=i.value)==null||a.pause():(l=i.value)==null||l.resume()}),n.watchEffect(()=>{var a;r.flowSpeed&&((a=i.value)==null||a.setFlowSpeed(r.flowSpeed))}),n.watchEffect(()=>{var a;r.renderScale&&((a=i.value)==null||a.setRenderScale(r.renderScale))}),n.watchEffect(()=>{var a;r.lowFreqVolume&&((a=i.value)==null||a.setLowFreqVolume(r.lowFreqVolume))}),n.watchEffect(()=>{var a;r.hasLyric!==void 0&&((a=i.value)==null||a.setHasLyric(r.hasLyric??!0))}),f({bgRender:i,wrapperEl:t}),(a,l)=>(n.openBlock(),n.createElementBlock("div",{ref_key:"wrapperRef",ref:t},null,512))}});exports.BackgroundRender=h;exports.LyricPlayer=E;
//# sourceMappingURL=amll-vue.cjs.map
