export interface Weapon {
  name: string
  uniqueName: string
  description: string
  tradable: boolean
  category: string
  productCategory: string;
  patchlogs: Array<{
    name: string
    date: string
    url: string
    additions: string
    changes: string
    fixes: string
  }>
  components: Array<{
    name: string
    uniqueName: string
    description: string
    type: string
    tradable: boolean
    itemCount: number
    drop: Array<{
      chance: number
      location: string
      rarity: string
      type: string
    }>
  }>
  introduced: {
    name: string
    url: string
    aliases: Array<string>
    parent: string
    date: string
  }
  estimatedVaultDate: string
  url: string
  mr: number
  riven_disposition: number
  polarities: Array<string>
  thumbnail: string
  tags: Array<string>
  vaulted: boolean
  marketCost: string
  bpCost: string
  attacks: Array<{
    name: string
    crit_chance: number
    crit_mult: number
    status_chance: number
    shot_type: number
    shot_speed: number
    duration: number
    radius: number
    speed: number
    pellet: {
      name: string
      count: number
    }
    charge_time: number
    flight: number
    falloff: {
      start: number
      end: number
      reduction: number
    }
    damage: {
      impact: number
      puncture: number
      slash: number
      heat: number
      cold: number
      electric: number
      toxin: number
      gas: number
      viral: number
      corrosive: number
      blast: number
      magnetic: number
      radiation: number
      true: number
      void: number
    }
    slide: string
    jump: string
    wall: string
    channeling: number
    slam: {
      damage: number
      radial: {
        damage: number
        element: string
        proc: number
        radius: number
      }
    }
  }>
  masteryReq: number
  buildPrice: number
  buildTime: number
  skipBuildTimePrice: number
  buildQuantity: number
  consumeOnBuild: boolean
  wikiaThumbnail: string
  wikiaUrl: string
  criticalChance: number
  criticalMultiplier: number
  disposition: number
  fireRate: number
  omegaAttenuation: number
  procChance: number
  releaseDate: number
  slot: number
  totalDamage: number
  vaultDate: string
  accuracy: number
  ammo: number
  magazineSize: number
  multishot: number
  noise: string
  trigger: string,
  type:'Weapon'
}
