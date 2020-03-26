enum ControlType {
  Primitive = 'Primitive',
  Corpse = 'Corpse',
  Gaussian = 'Gaussian',
  CinBB = 'CinBB',
}

type ControlAttributes = {
  name: string
  type: 'Primitive' | 'Corpse' | 'Gaussian' | 'CinBB'
  maximum_rabi_rate: number
  polar_angle: number
}

type Control = {
  type: 'controls'
  id: string
  attributes: ControlAttributes
}

export type { Control, ControlType, ControlAttributes }
