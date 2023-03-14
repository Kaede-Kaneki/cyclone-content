/**
 * toc-item type
 */
export type tocItemType = {
  id: string,
  title: string,
  level: number,
  index: number,
  children: tocItemType[],
  [key: string]: any
}

/**
 * md文档提取目录
 * @param val：string
 */
export const getToc = (val: string) => {
  const content = val
  const tempArr:tocItemType[] = []
  let title:string
  let level:number
  const navs = tempArr
  const navLevel = [2, 3, 4, 5, 6]
  let retNavs: tocItemType[] = []
  let toAppendNavList: tocItemType[] = []

  content.match(/(##+)[^#][^\n]*?(?:\n)/g)?.forEach((v, idx) => {
    const matchedTitle = v.match(/[^#+\s$][^\n+]*/g)
    const matchedLevel = v.match(/[#+]*/g)
    title = (matchedTitle && matchedTitle[0]) || ''
    level = (matchedLevel && matchedLevel[0].length) || 0
    tempArr.push({
      id: /^#\s.*/g.test(content) ? `heading-${idx + 1}` : `heading-${idx}`,
      title,
      level,
      index: idx,
      children: []
    })
  })

  navLevel.forEach((level) => {
    // 遍历二、三、四、五、六级标题，将同一级的标题组成新数组
    toAppendNavList = find(navs, { level })
    if (retNavs.length === 0) {
      // 处理二级标题
      retNavs = retNavs.concat(toAppendNavList)
    } else {
      // 处理三、四、五、六级标题，并将三、四、五、六级标题添加到对应的父级标题的children中
      toAppendNavList.forEach((item:tocItemType) => {
        item = Object.assign(item)
        const parentNavIndex = getParentIndex(navs, item.index)
        return appendToParentNav(retNavs, parentNavIndex, item)
      })
    }
  })
  return retNavs

  function find(arr: tocItemType[], condition: any) {
    return arr.filter((item) => {
      for (const key in condition) {
        if (Object.prototype.hasOwnProperty.call(condition, key) && condition[key] !== item[key]) {
          return false
        }
      }
      return true
    })
  }
  function getParentIndex(nav:tocItemType[], endIndex: number) {
    for (let i = endIndex - 1; i >= 0; i--) {
      if (nav[endIndex].level > nav[i].level && nav[endIndex].level - nav[i].level === 1) {
        return nav[i].index
      } else { getParentIndex(nav, nav[i].index) }
    }
  }
  function appendToParentNav(nav: tocItemType[], parentIndex: number|undefined, newNav: tocItemType) {
    const index = parentIndex
    if (index && index >= 0) {
      circle(nav, index, newNav)
    }
  }
  function circle(arr: any[], index: number, newNav: tocItemType) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].index === index) {
        arr[i].children = arr[i].children.concat(newNav)
      } else {
        const childArr = arr[i].children
        circle(childArr, index, newNav)
      }
    }
  }
}
